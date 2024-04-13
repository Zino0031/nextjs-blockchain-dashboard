import React from 'react';
import { render, screen } from '@testing-library/react';
import ChartCard from '../ChartCard';

describe('ChartCard', () => {
  const priceData = [
    [1618406400000, 2000],
    [1618492800000, 2200],
    [1618579200000, 2500],
    [1618665600000, 2300],
    [1618752000000, 2400],
  ];

  test('renders title and description', () => {
    render(<ChartCard priceData={priceData} title="Title" desc="Description" />);
    
    const titleElement = screen.getByText(/Title/i);
    const descElement = screen.getByText(/Description/i);

    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
  });

  test('renders Chart component with aggregated data', async () => {
    render(
      <ChartCard priceData={priceData} title="Title" desc="Description" />
    );

  });
});
