import { useEffect, useState } from 'react';
import { getBooks } from '@acme/books/data-access';
import { Books, BookTypePartial } from '@acme/books/ui';

export const BooksFeature = () => {
  const [books, setBooks] = useState<BookTypePartial[]>([]);
  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <>
      <h2>Books</h2>
      <Books
        books={books}
        onAdd={(book: BookTypePartial) => alert(`Added ${book.title}`)}
      />
    </>
  );
};
export default BooksFeature;
