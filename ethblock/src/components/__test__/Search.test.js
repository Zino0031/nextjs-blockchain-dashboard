import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../Search';
import { useRouter } from 'next/navigation'; 

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockRouter = {
  push: jest.fn(),
  query: {},
};

useRouter.mockReturnValue(mockRouter);

describe('Search component', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText } = render(<Search />);
    expect(getByPlaceholderText('Search Block...')).toBeInTheDocument();
  });

  test('handles form submission correctly', () => {
    const { getByPlaceholderText, getByRole } = render(<Search />);
    const searchInput = getByPlaceholderText('Search Block...');
    const searchButton = getByRole('button', { name: 'Search' });

    fireEvent.change(searchInput, { target: { value: '123' } });
    fireEvent.click(searchButton);

    expect(mockRouter.push).toHaveBeenCalledWith('/block/123');
  });
});
