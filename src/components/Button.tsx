"use client";

import { BooksContext } from "@/contexts/BooksContext";
import Book from "@/types/book.type";
import { ReactNode, useContext, useState } from "react";

const Button = ({ book, children }: { book: Book; children: ReactNode }) => {
	const { setReadBooks, setWishlistBooks } = useContext(BooksContext);

	const toggleListStatus = () => {
		switch (children) {
			case "Read":
				setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
				break;
			default:
				setWishlistBooks((prevWishlistBooks) => [...prevWishlistBooks, book]);
				break;
		}
	};
	return (
		<button
			className={`flex-1 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-blue-600/30 active:scale-[0.98] cursor-pointer`}
			onClick={toggleListStatus}>
			{children}
		</button>
	);
};

export default Button;
