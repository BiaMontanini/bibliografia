// Tipagem para os dados de um livro
export interface Book {
    course: string;
    title: string;
    author: string;
    publisher: string;
    year: number;
  }
  
  // Tipagem para o contexto
  export interface BibliografiaContextProps {
    books: Book[];
    totalCourses: number;
    totalBooks: number;
    oldestBook: Book;
    newestBook: Book;
  }
  