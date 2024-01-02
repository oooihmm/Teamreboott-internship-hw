import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Dashboard from "../style/dashboard";
import Contents from "../style/contents";
import SearchBox from "../components/SearchBox";
import ImageContainer from "../components/ImageContainer";
import { useQuery } from "react-query";
import { fetchSearchPhotos } from "../api";

const SearchTitle = styled.span`
	font-size: 45px;
	font-weight: 900;
`;

const Search = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search).get("query");

	const { data, isLoading, isError } = useQuery(["searchPhotos", query], () =>
		fetchSearchPhotos(query)
	);

	const SearchImageContainer = () => {
		if (isLoading) {
			return <div>isLoding...</div>;
		} else if (isError) {
			return <div>error</div>;
		} else {
			return <ImageContainer imageList={data["results"]} />;
		}
	};

	return (
		<Dashboard>
			<Contents>
				<SearchTitle>{query}</SearchTitle>
				<SearchBox />
				<SearchImageContainer />
			</Contents>
		</Dashboard>
	);
};

export default Search;
