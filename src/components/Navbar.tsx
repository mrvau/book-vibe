"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import bookLogo from "@/assets/book.ico";

const Navbar = () => {
	const pathname = usePathname();
	const links = (
		<>
			<li>
				<Link
					href="/"
					className={`${pathname === "/" && "active"} hover:text-green-500 hover:font-semibold hover:bg-transparent hover:shadow-none`}>
					Home
				</Link>
			</li>
			<li>
				<Link
					href="/books"
					className={`${pathname === "/books" && "active"} hover:text-green-500 hover:font-semibold hover:bg-transparent hover:shadow-none`}>
					Books
				</Link>
			</li>
			<li>
				<Link
					href="/listed-books"
					className={`${pathname === "/listed-books" && "active"} hover:text-green-500 hover:font-semibold hover:bg-transparent hover:shadow-none`}>
					Listed Books
				</Link>
			</li>
			<li>
				<Link
					href="/pages-to-read"
					className={`${pathname === "/pages-to-read" && "active"} hover:text-green-500 hover:font-semibold hover:bg-transparent hover:shadow-none`}>
					Pages to Read
				</Link>
			</li>
		</>
	);
	return (
		<nav>
			<div className="navbar px-0">
				<div className="navbar-start">
					<Link href="/" className="text-xl font-bold flex items-center gap-2 font-playfair">
						<Image src={bookLogo} alt="Book Vibe logo" width={30} height={30} />
						Book Vibe
					</Link>
				</div>
				<div className="navbar-center flex">
					<ul className="menu menu-horizontal justify-between gap-2 px-1">{links}</ul>
				</div>
				<div className="navbar-end gap-2">
					<Link href="/login" className="primary-btn">
						Sign In
					</Link>
					<Link href="/signup" className="btn bg-blue-300 text-white">
						Sign Up
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
