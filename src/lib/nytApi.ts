import axios from "axios";

export const fetchNYTimesBestSellers = async () => {
  try {
    const response = await axios.get(
      'https://api.nytimes.com/svc/books/v3/lists/combined-print-and-e-book-fiction.json',
      {
        params: {
          'api-key': process.env.NEXT_PUBLIC_NYTIMES_API_URL,
        },
      }
    );
    return response.data.results.books;
  } catch (error) {
    console.error('Error fetching NY Times bestsellers:', error);
    return [];
  }
};
