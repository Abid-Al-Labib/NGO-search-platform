import React, { useState } from "react";
import TypingAnimation from "@/components/ui/magicui/TypingAnimation";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

interface SearchBarProps {
    onSearch?: (value: string) => void; // Callback for handling search input
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();


    const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Redirect to the search page with query parameters
      navigate(`/search?query=${encodeURIComponent(inputValue)}`);
    }
  };

    return (
        <form onSubmit={handleSearch} className="relative w-full h-full flex items-center">
            {/* Typing Animation */}
            {!isFocused && !inputValue && (
                <div className="absolute left-4 text-gray-400 pointer-events-none">
                    <TypingAnimation
                        texts={["Search your queries here"]}
                        className="text-lg italic" // Italicized typing animation
                    />
                </div>
            )}

            {/* Input Field */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder=""
                className="input w-full h-full bg-[var(--card)] focus:outline-none rounded-3xl text-lg pl-4 pr-12"
            />
            <Button type="submit" className="absolute right-4 text-foreground bg-transparent text-gray-500">
                <Search className="w-5 h-5" />
            </Button>
        </form>
    );
};


export default SearchBar;
