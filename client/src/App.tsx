import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./style/global";

import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Bookmark from "./pages/Bookmark";
import { ImageData } from "./interface/unsplash";

const queryClient = new QueryClient();

function App() {
	const [bookmark, setBookmark] = useState<ImageData[]>([]);

	useEffect(() => {
		const savedBookmark = localStorage.getItem("savedBookmark");
		if (savedBookmark) {
			setBookmark(JSON.parse(savedBookmark));
		}
	}, []);

	const handleBookmark = (image: ImageData) => {
		const isBookmarked = bookmark.some(
			(bookmarkedImage) => bookmarkedImage.id === image.id
		);

		if (isBookmarked) {
			setBookmark(
				bookmark.filter((bookmarkedImage) => bookmarkedImage.id !== image.id)
			);
		} else {
			setBookmark([...bookmark, image]);
		}

		localStorage.setItem("savedBookmark", JSON.stringify(bookmark));
	};

	const Layout = () => {
		return (
			<div>
				<Header />
				<Outlet />
			</div>
		);
	};

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route
							index
							element={
								<Home handleBookmark={handleBookmark} bookmark={bookmark} />
							}
						></Route>
						<Route
							path="search"
							element={
								<Search handleBookmark={handleBookmark} bookmark={bookmark} />
							}
						></Route>
						<Route
							path="bookmark"
							element={
								<Bookmark handleBookmark={handleBookmark} bookmark={bookmark} />
							}
						></Route>
					</Route>
				</Routes>
			</QueryClientProvider>
		</>
	);
}

export default App;
