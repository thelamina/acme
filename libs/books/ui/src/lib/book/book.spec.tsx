import { render, cleanup } from '@testing-library/react';

import Book from './book';

describe('Book', () => {
  afterEach(cleanup);
  it('should render successfully', () => {
    const sample = {
      id: 1,
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      rating: 3,
      price: 9.99,
    };
    const { baseElement } = render(
      <Book book={sample} onAdd={(book) => console.log(book)} />
    );
    expect(baseElement).toBeTruthy();
  });
});
