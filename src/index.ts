import { Book } from "./entities/Book.ts";
import { User } from "./entities/User.ts";
import { BookRepository } from "./repositories/BookRepository.ts";
import { LoanRepository } from "./repositories/LoanRepository.ts";
import { UserRepository } from "./repositories/UserRepository.ts";
import { LibraryService } from "./services/LibraryService.ts";
import { SearchByAuthorStrategy } from "./strategies/SearchByAuthorStrategy.ts";
import { SearchByCategoryStrategy } from "./strategies/SearchByCategoryStrategy.ts";

const bookRepo = new BookRepository();
const userRepo = new UserRepository();
const loanRepo = new LoanRepository();
const searchByAuthor = new SearchByAuthorStrategy();
const searchByCategory = new SearchByCategoryStrategy();

const library = new LibraryService(bookRepo, userRepo, loanRepo);

const books = [
  new Book(1, "Entendendo Algoritmos", "Aditya Bhargava", "Programação", 5),
  new Book(2, "Doutor Sono", "Stephen King", "Drama", 5),
];

const users = [new User(1, "Gustavo"), new User(2, "Pedro")];

/* Registra livros */
library.registerBook(books);

/* Registra usuários */
library.registerUser(users);

/* Executa um empréstimo */
library.loanBook(1, 2);

/* Executa uma devolução */
library.giveBackBook(1, 2);

/* Executa buscas por Autor e por Categoria */
console.log(
  "Resultado da busca por Autor:",
  library.search(searchByAuthor, "Stephen King"),
);
console.log(
  "Resultado da busca por Categoria:",
  library.search(searchByCategory, "Programação"),
);
