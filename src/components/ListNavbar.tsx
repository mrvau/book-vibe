import React from 'react';
import Link from "next/link";

const ListNavbar = () => {
    return (
        <nav className={"flex items-center gap-4 border-b border-gray-200 py-4"}>
            <Link href="/read-books" className={`py-2 px-4`}>Read Books</Link>
            <Link href="/wishlist-books" className={`py-2 px-4`}>Wishlist Books</Link>
        </nav>
    );
};

export default ListNavbar;