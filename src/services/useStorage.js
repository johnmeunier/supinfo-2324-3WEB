import { useState, useEffect } from "react";

export const useStorage = (key) => {
  const [value, setValue] = useState(localStorage.getItem(key));
  useEffect(() => {
    try {
      setValue(JSON.parse(localStorage.getItem(key)));
    } catch (e) {
      setValue(localStorage.getItem(key));
    }
  }, [key]);
  const set = (newValue) => localStorage.setItem(key, newValue);
  const remove = () => localStorage.removeItem(key);
  return { value, set, remove };
};
