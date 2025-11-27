"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
/**
 * Array untuk menyimpan koleksi buku.
 * Objective: Create books array to store books.
 */
var books = [];
exports.books = books;
// --- Implementasi Fungsi ---
/**
 * Menambahkan buku baru ke koleksi.
 * Objective: Implement addBook function.
 * @param title Judul buku.
 * @param author Penulis buku.
 * @param publicationYear Tahun publikasi.
 * @returns void
 */
function addBook(title, author, publicationYear) {
    var newBook = {
        title: title,
        author: author,
        publicationYear: publicationYear,
    };
    books.push(newBook);
    // Feedback sesuai contoh output
    console.log("> Book added: \"".concat(title, "\" by ").concat(author, " (").concat(publicationYear, ")"));
}
/**
 * Menampilkan semua buku yang tersimpan dalam koleksi.
 * Objective: Implement listBooks function.
 * @returns void
 */
function listBooks() {
    console.log("\n> All Books:");
    if (books.length === 0) {
        console.log("  (No books in the collection.)");
        return;
    }
    // Iterasi dan tampilkan setiap buku
    books.forEach(function (book) {
        console.log("> - ".concat(book.title, " by ").concat(book.author, " (").concat(book.publicationYear, ")"));
    });
}
/**
 * Mencari buku berdasarkan judul.
 * Judul adalah parameter opsional. Jika tidak diberikan, fungsi tidak melakukan apa-apa.
 * Objective: Implement searchBook function.
 * @param title Judul buku yang dicari (opsional).
 * @returns void
 */
function searchBook(title) {
    // Cek apakah parameter title diberikan
    if (!title) {
        console.log("\n> Search skipped: No title provided.");
        return; // Mengembalikan void jika title tidak ada
    }
    console.log("\n> Search Results for \"".concat(title, "\":"));
    // Gunakan filter untuk mencari buku yang judulnya cocok
    var results = books.filter(function (book) {
        // Lakukan perbandingan case-insensitive
        return book.title.toLowerCase() === title.toLowerCase();
    });
    if (results.length === 0) {
        console.log("> - No books found with title \"".concat(title, "\"."));
        return;
    }
    // Tampilkan hasil pencarian
    results.forEach(function (book) {
        console.log("> - ".concat(book.title, " by ").concat(book.author, " (").concat(book.publicationYear, ")"));
    });
}
// --- Contoh Input untuk Pengujian ---
// 1. Adding some books
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
addBook("1984", "George Orwell", 1949);
addBook("To Kill a Mockingbird", "Harper Lee", 1960);
// 2. Displaying all books
listBooks();
// 3. Searching for a book by title
searchBook("1984");
// 4. Testing case-insensitivity in search
searchBook("the great gatsby");
// 5. Testing search with no results
searchBook("Yokohama");
// 6. Testing optional parameter (should return void/skip)
searchBook();
