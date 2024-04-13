import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../Navbar'; 

describe('Navbar component', () => {
  it('renders navigation links correctly', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Blocks')).toBeInTheDocument();
    expect(getByText('Transactions')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
  });
});
