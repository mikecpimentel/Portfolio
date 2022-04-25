import { useState } from "react";

export default function useToggle(defaultValue) {
   const [value, setValue] = useState(defaultValue);

   function toggleValue(value) {
      setValue((curr) => (typeof value === "boolean" ? value : !curr));
   }

   return [value, toggleValue];
}
