import { useEffect, useState } from 'react';
import { getBooks } from '@acme/books/data-access';
import { Books } from '@acme/books/ui';
import { IBook } from '@acme/shared/models';

export const BooksFeature = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={(book) => alert(`Added ${book.title}`)} />
    </>
  );
};
export default BooksFeature;
