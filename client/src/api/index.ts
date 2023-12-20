import axios from "axios";

const fetchRandomPhotos = async () => {
	const response = await axios.get("https://api.unsplash.com/photos/random", {
		params: {
			client_id: process.env.REACT_APP_ACCESS_KEY,
			count: 12,
		},
	});
	return response.data;
};

const fetchSearchPhotos = async (query: string | null) => {
	if (query) {
		const response = await axios.get(
			`https://api.unsplash.com/search/photos?query=${query}`,
			{
				params: {
					client_id: process.env.REACT_APP_ACCESS_KEY,
					per_page: 12,
				},
			}
		);
		return response.data;
	}
};

export { fetchRandomPhotos, fetchSearchPhotos };
