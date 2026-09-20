import Book from "@/types/book.type";
import BookCard from "./BookCard";
import { getBooks } from "@/lib/api";

const Books = async () => {
	const books = await getBooks();
	const popularBooks = books.filter((book: Book) => book.rating >= 4.5)
	return (
		<section className="text-center pb-10">
			<h3 className="text-4xl font-playfair font-semibold">Popular Books</h3>

			<div className="grid grid-cols-3 gap-4 mt-10">
				{popularBooks.map((book: Book) => (
					<BookCard key={book.bookId} book={book} />
				))}
			</div>
		</section>
	);
};

export default Books;
