import React from "react";
import Dashboard from "../style/dashboard";
import Contents from "../style/contents";
import ImageContainer from "../components/ImageContainer";
import { useBookmarkStore } from "../store/useBookmarkStore";

const Bookmark = () => {
	const { bookmarks } = useBookmarkStore();
	console.log(bookmarks);

	return (
		<Dashboard>
			<Contents>
				<ImageContainer imageList={bookmarks} />
			</Contents>
		</Dashboard>
	);
};

export default Bookmark;
