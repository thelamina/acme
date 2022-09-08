import { Route, Routes, Link } from 'react-router-dom';
import { BooksFeature } from '@acme/books/feature';
import { CartFeature } from '@acme/cart/feature';
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@acme/ui';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/cart">Cart</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                This is the generated root route.{' '}
                <Link to="/">Click here for page 2.</Link>
              </div>
            }
          />
          <Route path="/books" element={<BooksFeature />} />
          <Route path="/cart" element={<CartFeature />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
