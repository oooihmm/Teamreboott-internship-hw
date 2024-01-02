import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { ComparedImageData } from "../interface/unsplash";

import ImageModal from "./Modal/ImageModal";
import BookmarkButton from "./BookmarkButton";
import { useBookmarkStore } from "../store/useBookmarkStore";

const ImageBoxStyle = styled.div`
	padding: 0px;
	margin: 0 10px 20px 10px;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	min-width: 350px;

	min-height: 300px;
	max-height: 400px;
	object-fit: cover;
`;

type ImageProps = {
	image: ComparedImageData;
};

const ImageBox = ({ image }: ImageProps) => {
	const { addBookmark, removeBookmark } = useBookmarkStore();

	const link = image.urls.small;
	const description = image.alt_description;

	const [isModalOpen, setModalOpen] = useState(false);

	const handleClick = () => {
		image.isBookmarked ? removeBookmark(image) : addBookmark(image);
	};

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	return (
		<ImageBoxStyle>
			<BookmarkButton isBookmarked={image.isBookmarked} onClick={handleClick} />
			<Image src={link} alt={description} onClick={handleModalOpen} />
			<ImageModal
				image={image}
				isModalOpen={isModalOpen}
				handleModalClose={handleModalClose}
			/>
		</ImageBoxStyle>
	);
};

export default ImageBox;
