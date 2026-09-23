import React from "react";

interface ListNavbarProps {
	selection: {
		selectedList: string;
		setSelectedList: React.Dispatch<React.SetStateAction<string>>;
	};
	sort: {
		sortBy: string;
		setSortBy: React.Dispatch<React.SetStateAction<string>>;
	};
}

const ListNavbar = ({ selection, sort }: ListNavbarProps) => {
	const handleSortOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
		sort.setSortBy(e.target.value);
		console.log(e);
	};

	const handleSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
		selection.setSelectedList(e.currentTarget.value);
	};

	return (
		<nav className={"flex items-end justify-between border-b border-gray-200 mt-10"}>
			<div className="flex items-end">
				<button
					value={"read"}
					onClick={(e) => handleSelection(e)}
					className={`py-1 px-2 rounded-t-md cursor-pointer ${selection.selectedList === "read" && "list-active"}`}>
					Read Books
				</button>
				<button
					value={"wishlist"}
					onClick={(e) => handleSelection(e)}
					className={`py-1 px-2 rounded-t-md cursor-pointer ${selection.selectedList === "wishlist" && "list-active"}`}>
					Wishlist Books
				</button>
			</div>
			<div>
				<select
					name="sort"
					id="sort"
					className="w-fit py-1"
					value={sort.sortBy}
					onChange={(e) => handleSortOrder(e)}>
					<option value="">Sort</option>
					<option value="rating-low-high">Rating - Low &gt; High</option>
					<option value="rating-high-low">Rating - High &gt; Low</option>
					<option value="year-old-new">Year - Old &gt; New</option>
					<option value="year-new-old">Year - New &gt; Old</option>
				</select>
			</div>
		</nav>
	);
};

export default ListNavbar;
