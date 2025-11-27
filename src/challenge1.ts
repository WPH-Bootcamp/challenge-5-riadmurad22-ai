/**
 * Mendefinisikan tipe data untuk objek Book.
 * Objective: Create a type for book.
 */
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

/**
 * Array untuk menyimpan koleksi buku.
 * Objective: Create books array to store books.
 */
const books: Book[] = [];

// --- Implementasi Fungsi ---

/**
 * Menambahkan buku baru ke koleksi.
 * Objective: Implement addBook function.
 * @param title Judul buku.
 * @param author Penulis buku.
 * @param publicationYear Tahun publikasi.
 * @returns void
 */
function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: Book = {
    title,
    author,
    publicationYear,
  };

  books.push(newBook);

  // Feedback sesuai contoh output
  console.log(`> Book added: "${title}" by ${author} (${publicationYear})`);
}

/**
 * Menampilkan semua buku yang tersimpan dalam koleksi.
 * Objective: Implement listBooks function.
 * @returns void
 */
function listBooks(): void {
  console.log("\n> All Books:");
  if (books.length === 0) {
    console.log("  (No books in the collection.)");
    return;
  }

  // Iterasi dan tampilkan setiap buku
  books.forEach((book) => {
    console.log(
      `> - ${book.title} by ${book.author} (${book.publicationYear})`
    );
  });
}

/**
 * Mencari buku berdasarkan judul.
 * Judul adalah parameter opsional. Jika tidak diberikan, fungsi tidak melakukan apa-apa.
 * Objective: Implement searchBook function.
 * @param title Judul buku yang dicari (opsional).
 * @returns void
 */
function searchBook(title?: string): void {
  // Cek apakah parameter title diberikan
  if (!title) {
    console.log("\n> Search skipped: No title provided.");
    return; // Mengembalikan void jika title tidak ada
  }

  console.log(`\n> Search Results for "${title}":`);

  // Gunakan filter untuk mencari buku yang judulnya cocok
  const results = books.filter(
    (book) =>
      // Lakukan perbandingan case-insensitive
      book.title.toLowerCase() === title.toLowerCase()
  );

  if (results.length === 0) {
    console.log(`> - No books found with title "${title}".`);
    return;
  }

  // Tampilkan hasil pencarian
  results.forEach((book) => {
    console.log(
      `> - ${book.title} by ${book.author} (${book.publicationYear})`
    );
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

// --- Export untuk Tujuan Testing (Opsional) ---
// Jika Anda menggunakan Jest/Mocha, Anda mungkin perlu mengekspor fungsi dan array.

// Don't delete code bellow and this code must be at the bottom of the file
export { books, addBook, listBooks, searchBook };
