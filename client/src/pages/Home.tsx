import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Dashboard from "../style/dashboard";
import Contents from "../style/contents";
import SearchContainer from "../components/SearchContainer";
import ImageContainer from "../components/ImageContainer";
import { RawImageData, ImageData } from "../interface/unsplash";
import { useQuery } from "react-query";
import { fetchRandomPhotos } from "../api";

type HomeProps = {
	bookmark: ImageData[];
	handleBookmark: (image: ImageData) => void;
};

const Home = ({ bookmark, handleBookmark }: HomeProps) => {
	const [imageList, setImageList] = useState<ImageData[]>([]);
	const [background, setBackground] = useState<string>("");

	const { data, isLoading, isError } = useQuery(
		"RandomPhotos",
		fetchRandomPhotos,
		{
			staleTime: 60000,
		}
	);

	useEffect(() => {
		if (!isLoading && !isError) {
			const rawImageData: RawImageData[] = data;
			const imageDataList: ImageData[] = rawImageData.map((image) => ({
				id: image.id,
				slug: image.slug,
				created_at: image.created_at,
				width: image.width,
				height: image.height,
				color: image.color,
				likes: image.likes,
				user: image.user,
				urls: image.urls,
				links: image.links,
				alt_description: image.description,
			}));
			setImageList(imageDataList);
			setBackground(imageDataList[imageDataList.length - 1].urls.raw);
		}
	}, [data, isLoading, isError]);

	return (
		<Dashboard>
			<SearchContainer background={background}></SearchContainer>
			<Contents>
				<ImageContainer
					imageList={imageList}
					bookmark={bookmark}
					handleBookmark={handleBookmark}
				/>
			</Contents>
		</Dashboard>
	);
};

export default Home;
