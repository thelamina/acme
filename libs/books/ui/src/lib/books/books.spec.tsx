import { render, cleanup } from '@testing-library/react';

import Books from './books';

describe('Books', () => {
  afterEach(cleanup);
  it('should render successfully', () => {
    const booksSample = [
      {
        id: 1,
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        rating: 3,
        price: 9.99,
      },
    ];
    const { baseElement } = render(
      <Books books={booksSample} onAdd={(book) => booksSample.push(book)} />
    );
    expect(baseElement).toBeTruthy();
  });
});
