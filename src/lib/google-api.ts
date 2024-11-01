import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

export const fetchBooks = async (query: string) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
    );
    return response.data.items;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
