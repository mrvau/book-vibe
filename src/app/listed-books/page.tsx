"use client";
import { BooksContext } from '@/contexts/BooksContext'
import React, { useContext } from 'react'

const ListedBooksPage = () => {
  const {readBooks, wishlistBooks} = useContext(BooksContext)
  return (
		<div>
			<h2>Read Books: {readBooks.length}</h2>
			<h2>Wishlist Books: {wishlistBooks.length}</h2>
		</div>
  );
}

export default ListedBooksPage