import { createContext, useContext } from "react";

export const LanguageCtx = createContext({
  language: "en",
  setLanguage: () => {},
});

export function useLanguage() {
  return useContext(LanguageCtx);
}
