import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from '../Table';

describe('Table component', () => {
  const data = [
    {
      blockNumber: 1,
      time: '2024-04-01T12:00:00Z',
      totalTransactions: 10,
      miner: '0x1234567890123456789012345678901234567890',
      gasUsed: 100000,
    },
    {
      blockNumber: 2,
      time: '2024-04-02T12:00:00Z',
      totalTransactions: 20,
      miner: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef',
      gasUsed: 200000,
    },
  ];

  test('renders correctly', () => {
    const { getByText } = render(<Table data={data} type="blocks" />);
    const blockNumberHeading = getByText('Block');
    const timeHeading = getByText('Time');
    const transactionsHeading = getByText('Transactions');
    const minerHeading = getByText('Miner');
    const gasUsedHeading = getByText('Gas Used');

    expect(blockNumberHeading).toBeInTheDocument();
    expect(timeHeading).toBeInTheDocument();
    expect(transactionsHeading).toBeInTheDocument();
    expect(minerHeading).toBeInTheDocument();
    expect(gasUsedHeading).toBeInTheDocument();

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('100000')).toBeInTheDocument();

    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
    expect(getByText('200000')).toBeInTheDocument();
  });

  test('sorts data correctly by blockNumber', () => {
    const { getByText } = render(<Table data={data} type="blocks" />);
    const blockNumberHeading = getByText('Block');

    fireEvent.click(blockNumberHeading); 

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('100000')).toBeInTheDocument();

    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
    expect(getByText('200000')).toBeInTheDocument();
  });
});
