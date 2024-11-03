export interface IListName {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  updated: 'WEEKLY' | 'MONTHLY';
}

export interface IGoogleBook {
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
  };
}
