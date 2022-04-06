import { useState, useEffect } from "react";
import { useResourceServer } from "./useResourceServer";

export function useMessages() {
   const resourceServer = useResourceServer();
   const [messages, setMessages] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState('');
   console.log("useMessages() hook run");

   useEffect(() => {
      setIsLoading(true)
      resourceServer.get('/messages')
      .then(res => {
         setMessages(res.data);
         setIsLoading(false);
      })
      .catch(err => setError(err))
   }, [resourceServer]);

   return {messages, isLoading, error};
}
