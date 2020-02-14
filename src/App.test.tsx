import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('form exists', () => {
  const { getByRole } = render(<App />);
  const element = getByRole('form');
  expect(element).toBeInTheDocument();
});
