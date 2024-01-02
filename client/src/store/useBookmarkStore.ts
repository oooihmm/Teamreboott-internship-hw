import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { ImageData } from "../interface/unsplash";

interface Bookmark {
	bookmarks: ImageData[];
	addBookmark: (image: ImageData) => void;
	removeBookmark: (image: ImageData) => void;
}

export const useBookmarkStore = create<Bookmark>()(
	devtools(
		persist(
			(set) => ({
				bookmarks: [],
				addBookmark: (image) =>
					set((state) => ({
						bookmarks: [...state.bookmarks, image],
					})),
				removeBookmark: (image) =>
					set((state) => ({
						bookmarks: state.bookmarks.filter(
							(bookmarked) => bookmarked.id !== image.id
						),
					})),
			}),
			{
				name: "Bookmark",
				storage: createJSONStorage(() => sessionStorage),
			}
		)
	)
);
