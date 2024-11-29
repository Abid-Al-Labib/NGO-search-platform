// src/pages/SearchResults.tsx
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/ui/Navbar';
import SearchResultCard from '@/components/SearchResultCard';

interface SearchResult {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}


const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState<SearchResult[]>([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    // Dummy data fetching
    const dummyResults: SearchResult[] = [
      {
        id: 1,
        title: "Flood Relief in Rajshahi",
        description: "Details about flood relief efforts in Rajshahi.",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Clothes Donation Drive",
        description: "Help provide warm clothes to those in need.",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        title: "Local Community Cleanup",
        description: "Join us to clean up parks and public spaces.",
        imageUrl: "https://via.placeholder.com/150",
      },
    ];

    setResults(dummyResults); // Simulate API response
  }, [query]);

  return (
    <div  className="min-h-screen bg-background text-foreground">
      <div className="pt-2">
        <Navbar />
      </div>
      
      {/* Search Results Section */}
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">
          Search Results for "{query}"
        </h1>

        <div className="flex flex-col gap-4">
          {results.length > 0 ? (
            results.map((result) => (
              <SearchResultCard key={result.id} result={result} />
            ))
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default SearchResults;
