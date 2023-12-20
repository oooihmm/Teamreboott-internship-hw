import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Dashboard from "../style/dashboard";
import Contents from "../style/contents";
import SearchBox from "../components/SearchBox";
import ImageContainer from "../components/ImageContainer";
import { ImageData } from "../interface/unsplash";
import { useQuery } from "react-query";
import { fetchSearchPhotos } from "../api";

type SearchProps = {
	bookmark: ImageData[];
	handleBookmark: (image: ImageData) => void;
};

const SearchTitle = styled.span`
	font-size: 45px;
	font-weight: 900;
`;

const Search = ({ bookmark, handleBookmark }: SearchProps) => {
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
			return (
				<ImageContainer
					imageList={data["results"]}
					bookmark={bookmark}
					handleBookmark={handleBookmark}
				/>
			);
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
