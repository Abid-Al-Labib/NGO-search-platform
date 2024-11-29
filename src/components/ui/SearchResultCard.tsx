// src/components/SearchResultCard.tsx
import React from 'react';

const SearchResultCard = ({ result }) => {
  return (
    <div className="card bg-base-100 shadow-md mb-4 w-full">
      <div className="card-body flex flex-row items-center">
        {result.imageUrl && (
          <img
            src={result.imageUrl}
            alt={result.title}
            className="w-24 h-24 object-cover mr-4"
          />
        )}
        <div className="flex-1">
          <h2 className="card-title text-xl font-semibold">{result.title}</h2>
          <p className="text-gray-600">{result.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
