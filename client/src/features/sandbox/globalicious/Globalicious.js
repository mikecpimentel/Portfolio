import React from "react";
import CountryNamesFilters from "./components/CountryNamesFilters";
import "./globalicious.css";
import useCountryNames from "./useCountryNames";

const Globalicious = () => {
   console.log("Globalicious");
   const [countryNames, isLoading, error] = useCountryNames();

   
   if (isLoading) {
      console.log('Globalicious > Loading');
      return "Loading"}
   if (error) {
      console.log('Globalicious > error');
      return error}
   return (
      <div id="globalicious-wrapper">
         <CountryNamesFilters />
         {countryNames.map((item) => (
            <a className="country-name" key={item.name.official}>{item.name.common}</a>
         ))}
      </div>
   );
};

export default Globalicious;
