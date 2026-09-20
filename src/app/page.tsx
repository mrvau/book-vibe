import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/hero_img.jpg";
import Books from "@/components/Books";

const Home = () => {
	return (
		<div>
			<section className="py-10">
				<div className="flex items-center justify-between bg-gray-200 rounded-2xl p-16">
					<div className="flex flex-col gap-10">
						<h1 className="font-playfair text-5xl font-bold inline-block w-lg leading-20">
							Books to freshen up your bookshelf
						</h1>
						<Link href="/listed-books">
							<button className="primary-btn">View the List</button>
						</Link>
					</div>
					<div className="overflow-hidden rounded-2xl">
						<Image
							src={heroImage}
							alt="Book Vibe Hero Image"
							width={500}
							height={300}
						/>
					</div>
				</div>
			</section>

			<Books />
		</div>
	);
};

export default Home;
