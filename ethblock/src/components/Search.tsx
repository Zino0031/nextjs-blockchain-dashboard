'use client'
import { useState } from 'react';
  import { useRouter } from 'next/navigation';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/block/${encodeURIComponent(searchQuery)}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (!router) return null;

  return (
    <form className="max-w-screen" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="search"
          id="search-dropdown"
          value={searchQuery}
          onChange={handleChange}
          className="block p-2.5 w-full max-w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search Block..."
          required
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#7542C2] rounded-lg border border-[#7542C2] hover:bg-[#7542C2] focus:ring-4 focus:outline-none  dark:bg-[#7542C2] dark:hover:bg-[#4E2290] dark:focus:ring-[#4E2290]"
        >
          <svg
            className="w-10 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

export default Search;
