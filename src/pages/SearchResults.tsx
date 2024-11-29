// src/pages/SearchResults.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/ui/Navbar';
import SearchResultCard from '@/components/ui/SearchResultCard';

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    // Replace with your data fetching logic
    // For demonstration, we'll use dummy data
    const fetchResults = () => {
      const dummyResults = [
        {
          id: 1,
          title: 'Result Title 1',
          description: 'This is a description for result 1.',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'Result Title 2',
          description: 'This is a description for result 2.',
          imageUrl: 'https://via.placeholder.com/150',
        },
        // Add more results as needed
      ];
      setResults(dummyResults);
    };

    fetchResults();
  }, [query]);

  return (
    <div  className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">
          Search Results for "{query}"
        </h1>
        <div className="flex flex-col">
          {results.length > 0 ? (
            results.map((result) => (
              <SearchResultCard key={result.id} result={result} />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
