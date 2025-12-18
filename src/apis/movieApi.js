import axios from "axios";
import { API_KEY } from "./baseurl";
import { API_URL } from "./baseurl";

//HERE THEY HAVE MENTION THE TYPE BASED ON THAT IT WILL FETCH THE DATA MOVIES,EPISODES,SERIES ETC...
//IF THERE IS NO TYPE THEN ALL DATA WILL FETCH AND SHOW

// export const movieSearch = async (searchTerm, type = "") => {

export const movieSearch = async (searchTerm, page = 1, type) => {

  
  const typeParam = type !== "all" ? `&type=${type}` : "";
  try {
    const response = await axios.get(
      `${API_URL}?apikey=${API_KEY}&s=${searchTerm}&page=${page}${typeParam}`
    );

    return response.data;
  } catch (error) {
    console.log("Error while fetching the movie data", error);
    return [];
  }
};

export const movieSearchId = async (imdbID) => {
  try {
    const response = await axios.get(
      `${API_URL}?i=${imdbID}&apikey=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.log("Error while fetching the movie data", error);
    return [];
  }
};
