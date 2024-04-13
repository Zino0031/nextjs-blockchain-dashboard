import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero component', () => {
  const mockProps = {
    ethChart: {
      prices: [
        [1618406400000, 2000],
        [1618492800000, 2200],
        [1618579200000, 2500],
        [1618665600000, 2300],
        [1618752000000, 2400],
      ],
    },
    ethPrice: { usdPriceFormatted: 2500 },
    marketCapData: 1500000000,
    totalTransactions: 500,
    latestBlock: 1000,
  };

  test('renders hero component with correct data', () => {
    render(<Hero {...mockProps} />);

    expect(screen.getByText('ETHER PRICE')).toBeInTheDocument();
    expect(screen.getByText('$2500.00')).toBeInTheDocument(); 
    expect(screen.getByText('MARKET CAP')).toBeInTheDocument();
    expect(screen.getByText('$1,500,000,000')).toBeInTheDocument(); 

    expect(screen.getByText('BLOCK TRANSACTIONS')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument(); 

    expect(screen.getByText('LAST FINALIZED BLOCK')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument(); 

    expect(screen.getByText('Eth Price')).toBeInTheDocument();
    expect(screen.getByText('Chart Price 15 DAYS')).toBeInTheDocument();
  });
});
