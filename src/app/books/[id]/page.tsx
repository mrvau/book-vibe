import Button from "@/components/Button";
import { getBooks } from "@/lib/api";
import Book from "@/types/book.type";
import Image from "next/image";

interface BookDetailsProps {
	params: Promise<{ id: string }>;
}

const BookDetailsPage = async ({ params }: BookDetailsProps) => {
	const { id } = await params;
	const books = await getBooks();
	const book = books.find((book: Book) => String(book.bookId) == String(id));

	if (!book) throw new Error("Book not found: Invalid Book Id");

	return (
		<main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
			<div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 lg:grid-cols-[380px_1fr]">
				{/* Book Cover */}
				<div className="flex items-center justify-center bg-slate-100 p-8 sm:p-12">
					<div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-300/70">
						<Image
							src={book.image}
							alt={book.bookName}
							width={800}
							height={1200}
							className="h-auto max-h-150 w-full object-cover"
						/>
					</div>
				</div>

				{/* Book Information */}
				<div className="flex flex-col p-6 sm:p-8 lg:p-12">
					{/* Header */}
					<div className="border-b border-slate-200 pb-6">
						<div className="mb-4">
							<span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
								{book.category}
							</span>
						</div>

						<h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
							{book.bookName}
						</h1>

						<p className="mt-3 text-base text-slate-500">
							By <span className="font-semibold text-slate-700">{book.author}</span>
						</p>
					</div>

					{/* Review */}
					<div className="border-b border-slate-200 py-6">
						<h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
							Review
						</h2>

						<p className="text-base leading-7 text-slate-600">{book.review}</p>

						{/* Tags */}
						<div className="mt-6">
							<h3 className="mb-3 text-sm font-semibold text-slate-700">Tags</h3>

							<div className="flex flex-wrap gap-2">
								{book.tags.map((tag, index) => (
									<span
										key={index}
										className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">
										#{tag}
									</span>
								))}
							</div>
						</div>
					</div>

					{/* Book Metadata */}
					<div className="grid grid-cols-1 gap-4 border-b border-slate-200 py-6 sm:grid-cols-2">
						<div className="rounded-xl bg-slate-50 p-4">
							<span className="block text-xs font-medium uppercase tracking-wide text-slate-400">
								Number of Pages
							</span>
							<span className="mt-1 block text-lg font-bold text-slate-800">
								{book.totalPages}
							</span>
						</div>

						<div className="rounded-xl bg-slate-50 p-4">
							<span className="block text-xs font-medium uppercase tracking-wide text-slate-400">
								Publisher
							</span>
							<span className="mt-1 block text-lg font-bold text-slate-800">
								{book.publisher}
							</span>
						</div>

						<div className="rounded-xl bg-slate-50 p-4">
							<span className="block text-xs font-medium uppercase tracking-wide text-slate-400">
								Year of Publishing
							</span>
							<span className="mt-1 block text-lg font-bold text-slate-800">
								{book.yearOfPublishing}
							</span>
						</div>

						<div className="rounded-xl bg-slate-50 p-4">
							<span className="block text-xs font-medium uppercase tracking-wide text-slate-400">
								Rating
							</span>

							<div className="mt-1 flex items-center gap-2">
								<span className="text-lg font-bold text-slate-800">
									{book.rating}
								</span>

								<span className="text-lg text-amber-400">★</span>
							</div>
						</div>
					</div>

					{/* Actions */}
					<div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
						<Button book={book}>
							Read
						</Button>

						<Button book={book}>
							Wishlist
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default BookDetailsPage;
