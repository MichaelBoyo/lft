import React from 'react';

import { render, screen } from '@testing-library/react';

import Loader from '..';

test('loader component is rendered', () => {
  render(<Loader />);
  const loader = screen.getByTestId('loader');
  expect(loader).toBeInTheDocument();
});
