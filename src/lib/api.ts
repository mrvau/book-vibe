import Book from "@/types/book.type";

export const getBooks = async (): Promise<Book[]> => {
	const res = await fetch("http://localhost:3000/booksData.json", {cache: "force-cache"});
	if (!res.ok) throw new Error("Failed to fetch books!");
	return res.json();
};
