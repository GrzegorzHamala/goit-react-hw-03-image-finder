import axios from "axios";

const API_KEY = "11008307-2b498b2b7ae6a379a84554860";
const PER_PAGE = 15;

const getImages = async (keyword, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE}`
  );
  return data.hits;
};

export default getImages;
