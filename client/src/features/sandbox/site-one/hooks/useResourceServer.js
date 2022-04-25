import { useEffect } from "react";
import { useAccessToken } from "../AccessTokenContext";
import { resAxios } from "../services/axios";

export function useResourceServer() {
   console.log("useResourceServer() hook run");
   const { accessToken, refreshAccessToken } = useAccessToken();

   useEffect(() => {
      const requestIntercept = resAxios.interceptors.request.use(
         (config) => {
            console.log("requestInterceptor accessToken: " + accessToken);
            config.headers["Authorization"] = `Bearer ${accessToken}`;
            return config;
         },
         (error) => Promise.reject(error)
      );

      const responseIntercept = resAxios.interceptors.response.use(
         //if accessToken not working, refresh.
         (response) => response,
         async (error) => {
            console.log(error);
            const previousRequest = error.config;
            if (error.response.status < 400 && !previousRequest.sent) {
               previousRequest.sent = true;
               previousRequest.headers[
                  "Authorization"
               ] = `Bearer ${await refreshAccessToken()}`;
               return resAxios(previousRequest);
            }
            return Promise.reject(error);
         }
      );

      return () => {
         resAxios.interceptors.request.eject(requestIntercept);
         resAxios.interceptors.response.eject(responseIntercept);
      };
   }, [accessToken, refreshAccessToken]);

   return resAxios;
}
