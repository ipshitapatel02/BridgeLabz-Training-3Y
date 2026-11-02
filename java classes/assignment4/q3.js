
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) return false;
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) return false;
    this.isIssued = false;
    return true;
  }
}

const library = [
  new Book("Clean Code", "Robert C. Martin", "9780132350884"),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "9781593279509"),
  new Book("You Don't Know JS", "Kyle Simpson", "9781491904244"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "9780135957059"),
];

function showAvailableBooks() {
  console.log("\n--- Available Books ---");
  const available = library.filter((b) => !b.isIssued);
  if (available.length === 0) console.log("No books available.");
  available.forEach((b) => console.log(`${b.title} by ${b.author} (ISBN: ${b.isbn})`));
}

function issueByISBN(isbn) {
  const book = library.find((b) => b.isbn === isbn.trim());
  if (!book) return console.log(`No book found with ISBN ${isbn}.`);
  console.log(book.issueBook()
    ? `Issued: "${book.title}"`
    : `Sorry, "${book.title}" is already issued.`);
}

showAvailableBooks();

if (typeof prompt === "function") {
  issueByISBN(prompt("Enter ISBN to issue:") || "");
  showAvailableBooks();
} else {
  const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
  rl.question("\nEnter ISBN to issue: ", (isbn) => {
    issueByISBN(isbn);
    showAvailableBooks();
    rl.close();
  });
}
