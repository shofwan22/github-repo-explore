import { useState } from 'react';

const InputSearch = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        className="bg-slate-100 text-black border border-gray-400 rounded px-4 py-2 w-full mb-3"
        placeholder="Enter username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-2 w-full"
      >
        Search
      </button>
    </form>
  );
};

export default InputSearch;
