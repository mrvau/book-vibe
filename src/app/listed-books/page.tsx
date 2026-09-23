"use client";
import BookList from "@/components/BookList";
import ListNavbar from "@/components/ListNavbar";
import { BooksContext } from "@/contexts/BooksContext";
import { useContext, useState } from "react";

const ListedBooksPage = () => {
	const { readBooks, wishlistBooks } = useContext(BooksContext);
	const [selectedList, setSelectedList] = useState("read");
	const [sortBy, setSortBy] = useState("");

	const listToRender = selectedList === "read" ? readBooks : wishlistBooks;

	return (
		<div className="py-10">
			<h1 className="font-playfair font-bold text-4xl text-center bg-gray-100 py-10 rounded-lg">
				Listed Books
			</h1>
			<ListNavbar
				selection={{ selectedList, setSelectedList }}
				sort={{ sortBy, setSortBy }}
			/>
			<div className="mt-10 flex flex-col gap-2">
				{listToRender.length ? listToRender.map((book) => (
					<BookList key={book.bookId} book={book} />
				)): <p>No {selectedList.toUpperCase()} books found.</p>}
			</div>
		</div>
	);
};

export default ListedBooksPage;
