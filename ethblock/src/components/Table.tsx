"use client"
import React, { useState, useEffect } from 'react';

interface TableProps {
  data: any[];
  type: 'blocks' | 'transactions';
}

const Table: React.FC<TableProps> = ({ data, type }) => {
  const [sortBy, setSortBy] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<string>('');
  const [sortedData, setSortedData] = useState<any[]>([]);
  const handleSort = (attribute: string) => {
    if (sortBy === attribute) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(attribute);
      setSortDirection('asc');
    }
  };

  useEffect(() => {
    const sorteddata = [...data].sort((a, b) => {
      let valueA = a[sortBy];
      let valueB = b[sortBy];
      
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }
      
      if (!isNaN(valueA) && !isNaN(valueB)) {
        valueA = parseFloat(valueA);
        valueB = parseFloat(valueB);
      }
      
      if (sortDirection === 'asc') {
        return valueA < valueB ? -1 : 1;
      } else {
        return valueA > valueB ? -1 : 1;
      }
    });
  
    setSortedData(sorteddata);
  }, [sortBy, sortDirection, data]);

  const truncateString = (str: string | undefined, maxLength: number) => {
    if (!str || str.length <= maxLength) {
      return str;
    }
    return str.slice(0, maxLength) + '...';
  };


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(); 
  };

  return (
    <div className="max-w-96 md:max-w-full max-h-96 overflow-auto text-white bg-gradient-to-br from-[#1B1B1B] to-black group rounded-3xl border border-[#00f0ff] px-2 py-2 transition-colors hover:bg-gradient-to-tl">
    <table className="min-w-full">
      <thead>
        <tr>
          {type === 'blocks' ? (
            <>
              <th scope="col" onClick={() => handleSort('blockNumber')} className="px-6 py-3 cursor-pointer">
                Block {sortBy === 'blockNumber' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
              </th>
              <th scope="col" onClick={() => handleSort('time')} className="px-6 py-3 cursor-pointer">
                Time {sortBy === 'time' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
              </th>
              <th>Transactions</th>
              <th scope="col" onClick={() => handleSort('miner')} className="px-6 py-3 cursor-pointer">
                Miner {sortBy === 'miner' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
              </th>
              <th scope="col" onClick={() => handleSort('gasUsed')} className="px-6 py-3 cursor-pointer">
                Gas Used {sortBy === 'gasUsed' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
              </th>
            </>
          ) : (
            <>
              <th scope="col" onClick={() => handleSort('transactionHash')} className="px-6 py-3 cursor-pointer">
                TxHash {sortBy === 'transactionHash' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
              </th>
              <th scope="col" onClick={() => handleSort('time')} className="px-6 py-3 cursor-pointer">
                Time {sortBy === 'time' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
              </th>
              <th scope="col" onClick={() => handleSort('fromAddress')} className="px-6 py-3 cursor-pointer">
                From {sortBy === 'fromAddress' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
              </th>
              <th scope="col" onClick={() => handleSort('toAddress')} className="px-6 py-3 cursor-pointer">
                To {sortBy === 'toAddress' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
              </th>
              <th scope="col" onClick={() => handleSort('value')} className="px-6 py-3 cursor-pointer">
                Value {sortBy === 'value' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
              </th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {sortedData.slice(0, 10).map((item: any, index: number) => (
          <React.Fragment key={index}>
            {type === 'blocks' ? (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.blockNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(item.time)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.totalTransactions}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{truncateString(item.miner, 20)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.gasUsed}</td>
              </tr>
            ) : (
              item.transactions && item.transactions.slice(0, 10).map((transaction: any, idx: number) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{truncateString(transaction.transactionHash, 20)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(transaction.time)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{truncateString(transaction.fromAddress, 20)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{truncateString(transaction.toAddress, 20)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Number(transaction.value).toFixed(2)}</td>
                </tr>
              ))
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Table;
