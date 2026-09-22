"use client";
import Book from "@/types/book.type";
import React, { createContext, useState } from "react";

interface BooksContext {
	readBooks: Book[];
	setReadBooks: React.Dispatch<React.SetStateAction<Book[]>>;
	wishlistBooks: Book[];
	setWishlistBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const BooksContext = createContext<BooksContext>({
	readBooks: [],
	setReadBooks: () => {},
	wishlistBooks: [],
	setWishlistBooks: () => {},
});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
	const [readBooks, setReadBooks] = useState<Book[]>([]);
	const [wishlistBooks, setWishlistBooks] = useState<Book[]>([]);

	return (
		<BooksContext.Provider value={{ readBooks, setReadBooks, wishlistBooks, setWishlistBooks }}>
			{children}
		</BooksContext.Provider>
	);
};

export default BooksProvider;
