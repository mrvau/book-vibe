import Book from '@/types/book.type'
import Image from 'next/image'
import Link from 'next/link'

const BookList = ({book}: {book: Book}) => {
  return (
		<article className="group w-full overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
			<div className="flex flex-col gap-6 p-4 sm:flex-row sm:p-5">
				{/* Book Image */}
				<div className="shrink-0">
					<div className="relative mx-auto h-48 w-32 overflow-hidden rounded-lg bg-base-200 shadow-md sm:mx-0 sm:h-52 sm:w-36">
						<Image
							src={book.image}
							alt={book.bookName}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-105"
							sizes="144px"
						/>
					</div>
				</div>

				{/* Main Content */}
				<div className="flex min-w-0 flex-1 flex-col">
					{/* Title + Author */}
					<div>
						<h2 className="text-xl font-bold leading-tight text-base-content sm:text-2xl">
							{book.bookName}
						</h2>

						<p className="mt-1 text-sm text-base-content/60">
							By{" "}
							<span className="font-medium text-base-content/80">{book.author}</span>
						</p>
					</div>

					{/* Tags */}
					<div className="mt-4 flex flex-wrap gap-2">
						{book.tags.map((tag, index) => (
							<span
								key={index}
								className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
								{tag}
							</span>
						))}
					</div>

					{/* Book Information */}
					<div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4">
						<div>
							<p className="text-xs text-base-content/50">Publisher</p>
							<p className="mt-0.5 truncate font-medium">{book.publisher}</p>
						</div>

						<div>
							<p className="text-xs text-base-content/50">Published</p>
							<p className="mt-0.5 font-medium">{book.yearOfPublishing}</p>
						</div>

						<div>
							<p className="text-xs text-base-content/50">Pages</p>
							<p className="mt-0.5 font-medium">{book.totalPages}</p>
						</div>

						<div>
							<p className="text-xs text-base-content/50">Category</p>
							<p className="mt-0.5 truncate font-medium">{book.category}</p>
						</div>
					</div>

					{/* Bottom Row */}
					<div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-base-200 pt-4">
						{/* Rating */}
						<div className="flex items-center gap-2">
							<div className="flex items-center gap-1 rounded-md bg-warning/10 px-2.5 py-1">
								<span className="text-sm">★</span>
								<span className="text-sm font-bold text-warning">
									{book.rating}
								</span>
							</div>

							<span className="text-xs text-base-content/50">Book Rating</span>
						</div>

						{/* Action */}
						<Link
							href={`/books/${book.bookId}`}
							className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-content transition-all duration-200 hover:bg-primary/90 hover:shadow-md">
							View Details
							<span className="transition-transform duration-200 group-hover:translate-x-0.5">
								→
							</span>
						</Link>
					</div>
				</div>
			</div>
		</article>
  );
}

export default BookList