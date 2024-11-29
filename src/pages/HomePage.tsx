import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import "../index.css";
import { useTheme } from "@/context/ThemeContext";
import Particles from "@/components/ui/magicui/particles";
import ShineBorder from "@/components/ui/magicui/shine-border";
import TypingAnimation from "@/components/ui/magicui/TypingAnimation";
import { Search } from 'lucide-react';
import SearchBar from "@/components/ui/SearchBar";


const HomePage = () => {
  const { isDarkMode } = useTheme();
  const [inputValue, setInputValue] = useState(""); // Track input text
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col">
      {/* Navbar */}
      <div className="pt-2">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="flex-grow flex items-center justify-center relative">
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={isDarkMode ? "#ffffff" : "#000000"}
          refresh
        />

      {/* Input Field with ShineBorder */}
        <div className="flex justify-center items-center w-1/3 relative h-16">
          {/* Adjusted ShineBorder */}
          <ShineBorder
            borderRadius={24}
            borderWidth={4}
            duration={8}
            color={isDarkMode ? ["#232a36", "#ffffff", "#2a0c45", "#0c2d45"] : ["#A07CFE", "#FE8FB5", "#FFD580"]} // Dark mode colors : ["#FE8FB5", "#FFD580", "#63bcff"] // Light mode colors },
            
            className="absolute inset-0 z-0" // Fully wraps container
          />

          {/* Centered SearchBar */}
          <div className="relative z-10 flex items-center"
            style={{
              width: "calc(100% - 5px)", // Width is 5px smaller than ShineBorder
              height: "calc(100% - 5px)", // Matches height adjustment if needed
            }}>
            <SearchBar
              texts={[
                "Trending Topics:",
                "Flooding in Rajshahi",
                "Warm Clothes Donation in Dhanmondi",
                "Beat Tahsin up",
              ]}
              onSearch={(value) => console.log("Search input:", value)}
              className="w-full h-full rounded-[24px] bg-[var(--card)] focus:outline-none" // Matches ShineBorder dimensions
            />
          </div>
        </div>
      
      </div>
        
      
    </div>
  );
};

export default HomePage;
