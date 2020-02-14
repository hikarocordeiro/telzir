import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App contains form', () => {
  const { getByRole } = render(<App />);
  const linkElement = getByRole('form');
  expect(linkElement).toBeInTheDocument;
});
