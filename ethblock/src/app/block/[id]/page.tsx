import FetchData from '@/utils/FetchData';


export default async function BlockQuery({ params }: { params: { id: string } }) {

  const block = await FetchData.fetchBlock(params.id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(); 
  };

return (
    <div className="container my-4 py-8  px-20 flex justify-center items-center  ">
      {block ? (
        <div className="shadow overflow-hidden sm:rounded-lg bg-gradient-to-br from-[#1B1B1B] to-black group rounded-4xl border border-[#00f0ff]  transition-colors hover:bg-gradient-to-tl p-10">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-yellow-300">Block Details</h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">Block Height</dt>
                <dd className="mt-1 text-sm text-white sm:col-span-2">{block.number}</dd>
              </div>
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">Timestamp</dt>
                <dd className="mt-1 text-sm text-white sm:col-span-2">{formatDate(block.timestamp)}</dd>
              </div>
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">Transactions</dt>
                <dd className="mt-1 text-sm text-white sm:col-span-2">{block.transaction_count} transactions </dd>
              </div>
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">Total Difficulty</dt>
                <dd className="mt-1 text-sm text-white sm:col-span-2">{block.total_difficulty}</dd>
              </div>
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">Size</dt>
                <dd className="mt-1 text-sm text-white sm:col-span-2">{block.size}</dd>
              </div>
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">Gas Used</dt>
                <dd className="mt-1 text-sm text-white sm:col-span-2">{block.gas_used}</dd>
              </div>
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">Gas Limit</dt>
                <dd className="mt-1 text-sm text-white sm:col-span-2">{block.gas_limit}</dd>
              </div>
   
      
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">Hash</dt>
                <dd className="mt-1 text-sm text-white">{block.hash}</dd>
              </div>
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">Parent Hash</dt>
                <dd className="mt-1 text-sm text-white">{block.parent_hash}</dd>
              </div>
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">State Root</dt>
                <dd className="mt-1 text-sm text-white">{block.state_root}</dd>
              </div>
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">Withdrawals Root</dt>
                <dd className="mt-1 text-sm text-white">{block.withdrawals_root}</dd>
              </div>
              <div className="flex justify-between items-center py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400 ml-4">Nonce</dt>
                <dd className="mt-1 text-sm text-white">{block.nonce}</dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <p>Loading block information...</p>
      )}
    </div>
  );
}