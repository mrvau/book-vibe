import Book from "@/types/book.type";
import BookCard from "@/components/BookCard";
import { getBooks } from "@/lib/api";

const Books = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <section className="text-center pb-10">
      <h3 className="text-4xl font-playfair font-semibold">All Books</h3>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {books.map((book: Book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
