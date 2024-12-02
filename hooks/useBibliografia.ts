import { useContext } from "react";
import BibliografiaContext from "../contexts/BibliografiaContext";
import { BibliografiaContextProps } from "../types/bibliografiaTypes";

// Hook personalizado para acessar o contexto
export const useBibliografia = (): BibliografiaContextProps => {
  const context = useContext(BibliografiaContext);
  if (!context) {
    throw new Error("useBibliografia deve ser usado dentro de um BibliografiaProvider");
  }
  return context;
};
