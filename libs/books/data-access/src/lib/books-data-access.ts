interface BookType {
  id: number;
  title: string;
  author: string;
  rating: number;
  price: number;
}

export const getBooks = async (): Promise<BookType[]> => {
  const data = await fetch('/api/books', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.json();
};
