import axios from "axios";

export const getBestSellersListNames = async () => {
  try {
    const response = await axios.get(
      'https://api.nytimes.com/svc/books/v3/lists/names.json',
      {
        params: {
          'api-key': process.env.NEXT_PUBLIC_NYTIMES_API_URL,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error('Error fetching NY Times bestsellers:', error);
    return [];
  }
};

export const getCombinedFiction = async () => {
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

export const getBestSellersByName = async (name: string) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/${name}.json`,
      {
        params: {
          'api-key': process.env.NEXT_PUBLIC_NYTIMES_API_URL,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error('Error fetching NY Times bestsellers:', error);
    return [];
  }
};
