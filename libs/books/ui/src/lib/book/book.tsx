import styled from 'styled-components';
import { Button } from '@acme/ui';

interface BookType {
  id: number;
  title: string;
  author: string;
  rating: number;
  price: number;
}

export type BookTypePartial = Partial<BookType>;

export interface BookProps {
  book: BookTypePartial;
  onAdd: (book: BookTypePartial) => void;
}

const StyledBook = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  &:last-child 
    border-bottom: none;
  }
  > span {
    padding: 1rem 0.5rem;
    margin-right: 0.5rem;
  }
  .title {
    flex: 1;
  }
  .rating {
    color: #999;
  }
  .price {
    color: #478d3c;
  }
`;

export const Book = ({ book, onAdd }: BookProps) => {
  const handleAdd = () => onAdd(book);
  return (
    <StyledBook>
      <span className="title">
        {book.title} by <em>{book.author}</em>
      </span>
      <span className="rating">{book.rating}</span>
      <span className="price">${book.price}</span>

      <span>
        <Button onClick={handleAdd}>Add to Cart</Button>
      </span>
    </StyledBook>
  );
};

export default Book;
