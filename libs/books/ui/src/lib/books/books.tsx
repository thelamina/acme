import styled from 'styled-components';
import { Book, BookTypePartial } from '../book/book';

export interface BooksProps {
  books: BookTypePartial[];
  onAdd: (book: BookTypePartial) => void;
}

const StyledBooks = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Books = ({ books, onAdd }: BooksProps) => {
  return (
    <StyledBooks>
      {books.map((book) => (
        <Book key={book.id} book={book} onAdd={onAdd} />
      ))}
    </StyledBooks>
  );
};

export default Books;
