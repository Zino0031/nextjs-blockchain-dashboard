import React from 'react';
import { render } from '@testing-library/react';
import TitleLine from '../TitleLine';

describe('TitleLine component', () => {
  test('renders title correctly', () => {
    const title = 'Test Title';
    const { getByText } = render(<TitleLine title={title} />);
    const titleElement = getByText(title);
  });

  test('renders horizontal line correctly', () => {
    const { getByTestId } = render(<TitleLine title="Test Title" />);
  });
});
