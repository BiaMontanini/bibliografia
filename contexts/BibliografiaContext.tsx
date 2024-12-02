import React, { createContext, useMemo } from "react";
import books from "../data/books.json";
import { Book, BibliografiaContextProps } from "../types/bibliografiaTypes";

// Criar o contexto
const BibliografiaContext = createContext<BibliografiaContextProps | undefined>(
  undefined
);

// Provider para o contexto
export const BibliografiaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Calcular os valores derivados
  const totalCourses = useMemo(
    () => new Set(books.map((book) => book.course)).size,
    []
  );
  const totalBooks = useMemo(() => books.length, []);
  const oldestBook = useMemo(
    () =>
      books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest)),
    []
  );
  const newestBook = useMemo(
    () =>
      books.reduce((newest, book) => (book.year > newest.year ? book : newest)),
    []
  );

  // Contexto fornecendo os valores
  const value: BibliografiaContextProps = {
    books,
    totalCourses,
    totalBooks,
    oldestBook,
    newestBook,
  };

  return (
    <BibliografiaContext.Provider value={value}>
      {children}
    </BibliografiaContext.Provider>
  );
};

export default BibliografiaContext;
