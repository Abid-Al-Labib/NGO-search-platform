import React from "react";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import ShineBorder from "./magicui/shine-border";
import { Button } from "./button";


const Navbar = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="mx-auto rounded-badge w-fit bg-[var(--navbar-color)] backdrop-blur-md z-50"
      style={{
        boxShadow: isDarkMode
          ? "0 4px 6px rgba(255, 255, 255, 0.2)" // White shadow for dark mode
          : "0 4px 6px rgba(0, 0, 0, 0.2)", // Default shadow for light mode
      }}>
            <div className="mx-auto flex items-center justify-between px-4 py-3">

                {/* Buttons */}
                <div className="flex gap-4">
                    <Button className="px-4 py-2 text-sm font-medium text-foreground bg-transparent rounded-3xl">
                        Home
                    </Button>
                    <Button className="px-4 py-2 text-sm font-medium text-foreground bg-transparent rounded-3xl">
                        Non Profits
                    </Button>
                    <Button className="px-4 py-2 text-sm font-medium text-foreground bg-transparent rounded-3xl">
                        Join
                    </Button>
                    <Button className="px-4 py-2 text-sm font-medium text-foreground bg-transparent rounded-3xl">
                        Log In
                    </Button>
                    <ThemeToggle/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
