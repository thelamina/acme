import { useEffect, useState } from 'react';
import { getBooks } from '@acme/books/data-access';
import { Books } from '@acme/books/ui';
import { IBook } from '@acme/shared/models';
import { useDispatch } from 'react-redux';
import { cartActions } from '@acme/cart/data-access';

export const BooksFeature = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getBooks().then(setBooks);
  }, []);
  return (
    <>
      <h2>Books</h2>
      <Books
        books={books}
        onAdd={(book) =>
          // Using add action from cart slice
          dispatch(
            cartActions.add({
              id: book.id,
              description: book.title,
              cost: book.price,
            })
          )
        }
      />
    </>
  );
};
export default BooksFeature;
