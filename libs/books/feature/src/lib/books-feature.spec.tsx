import { render, cleanup } from '@testing-library/react';

import BooksFeature from './books-feature';

describe('BooksFeature', () => {
  afterEach(cleanup);
  it('should render successfully', () => {
    const { baseElement } = render(<BooksFeature />);
    expect(baseElement).toBeTruthy();
  });
});
