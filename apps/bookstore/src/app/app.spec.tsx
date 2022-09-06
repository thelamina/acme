import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

describe('App', () => {
  afterEach(cleanup);
  const MainApp = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  it('should render successfully', () => {
    const { baseElement } = render(<MainApp />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<MainApp />);

    expect(getByText('Bookstore')).toBeTruthy();
  });
});
