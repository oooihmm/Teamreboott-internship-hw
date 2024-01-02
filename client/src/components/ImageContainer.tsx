import React from "react";
import ImageBox from "../components/ImageBox";
import ImageWrapper from "../style/imagewrapper";
import { ImageData } from "../interface/unsplash";

type imageContainerProps = {
	imageList: ImageData[];
};

const ImageContainer = ({ imageList }: imageContainerProps) => {
	const chunkSize = Math.round(imageList.length / 3);

	return (
		<>
			{" "}
			<ImageWrapper>
				{imageList.slice(0, chunkSize).map((image) => (
					<ImageBox key={image.id} image={image} />
				))}
			</ImageWrapper>
			<ImageWrapper>
				{imageList.slice(chunkSize, chunkSize * 2).map((image) => (
					<ImageBox key={image.id} image={image} />
				))}
			</ImageWrapper>
			<ImageWrapper>
				{imageList.slice(chunkSize * 2, imageList.length).map((image) => (
					<ImageBox key={image.id} image={image} />
				))}
			</ImageWrapper>
		</>
	);
};

export default ImageContainer;
