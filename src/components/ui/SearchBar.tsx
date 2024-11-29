import React, { useState } from "react";
import TypingAnimation from "@/components/ui/magicui/TypingAnimation";
import { Search } from "lucide-react";

interface SearchBarProps {
    texts: string[]; // Array of placeholder texts for typing animation
    onSearch?: (value: string) => void; // Callback for handling search input
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ texts, onSearch }) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        if (onSearch) onSearch(value); // Trigger callback if provided
    };

    return (
        <div className="relative w-full h-full flex items-center">
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <Search className="w-5 h-5" /> {/* Adjust the size of the icon */}
            </div>
            {/* Typing Animation */}
            {!isFocused && !inputValue && (
                <div className="absolute left-4 text-gray-400 pointer-events-none">
                    <TypingAnimation texts={texts} className="text-lg" />
                </div>
            )}
    
            {/* Input Field */}
            <input
                type="text"
                value={inputValue}
                placeholder=""
                onChange={handleInputChange} // Track input value
                onFocus={() => setIsFocused(true)} // Stop animation on focus
                onBlur={() => setIsFocused(false)} // Resume animation on blur
                className="input w-full h-full bg-[var(--card)] focus:outline-none rounded-3xl text-lg pl-4 pr-12"
            />
            
        </div>
    );
};

export default SearchBar;
