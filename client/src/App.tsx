import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./style/global";

import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Bookmark from "./pages/Bookmark";

const queryClient = new QueryClient();

function App() {
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
						<Route index element={<Home />}></Route>
						<Route path="search" element={<Search />}></Route>
						<Route path="bookmark" element={<Bookmark />}></Route>
					</Route>
				</Routes>
			</QueryClientProvider>
		</>
	);
}

export default App;
