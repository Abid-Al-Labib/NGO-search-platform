import React from "react";
import { MagicCard } from "./ui/magicui/magic-card";
import { useTheme } from "../context/ThemeContext";

interface SearchResult {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

interface SearchResultCardProps {
    result: SearchResult;
}


const SearchResultCard: React.FC<SearchResultCardProps> = ({ result }) => {
    const { isDarkMode } = useTheme();

    return (
        <MagicCard
            className="p-4 mb-4" // Add spacing and margin
            gradientSize={100}
            gradientColor={isDarkMode ? "rgba(17, 47, 97, 0.4)": "rgba(184,184,184, 0.4)" } // Customize gradient color
            gradientOpacity={0.4} // Adjust gradient opacity
        >
            <div className="flex items-center gap-4">
                {/* Image */}
                <img
                    src={result.imageUrl}
                    alt={result.title}
                    className="w-16 h-16 object-cover rounded-lg"
                />

                {/* Content */}
                <div>
                    <h2 className="text-lg font-semibold text-foreground">{result.title}</h2>
                    <p className="text-sm text-gray-500">{result.description}</p>
                </div>
            </div>
        </MagicCard>
    );
};

export default SearchResultCard;
