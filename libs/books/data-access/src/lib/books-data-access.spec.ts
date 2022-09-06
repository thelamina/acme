import { getBooks } from './books-data-access';

describe('booksDataAccess', () => {
  it('should return list of Books', async () => {
    const res = await getBooks();
    expect(res).toBeTruthy();
  });
});
