import Book from "@/types/book.type";
import Image from "next/image";
import Link from "next/link";
import star from "@/assets/star.png";

const BookCard = ({ book }: { book: Book }) => {
	const { bookId, bookName, author, category, image, rating, tags } = book;
	return (
		<Link href={`/books/${bookId}`} className="border border-gray-300 p-6 rounded-xl text-left">
			<div className="bg-gray-100 flex items-center justify-center p-10 rounded-lg h-80">
				<Image src={image} alt={bookName} width={150} height={150} />
			</div>
			<div className="flex gap-4 py-4">
				{tags.map((tag, index) => (
					<div key={`${tag}-${index}`} className="bg-green-100 py-1 px-4 rounded-full text-green-500 font-semibold">{tag}</div>
				))}
			</div>
			<div className="space-y-3 mb-4">
				<h3 className="font-playfair font-bold text-3xl">{bookName}</h3>
				<span>By: {author}</span>
			</div>
			<div className="border-t border-dashed border-gray-200 py-4 flex justify-between">
				<span>{category}</span>
				<div className="flex items-center gap-2">
					<span>{rating}</span>
					<Image src={star} alt="Rating Star" width={16} height={16} />
				</div>
			</div>
		</Link>
	);
};

export default BookCard;