import React from "react";
import { CSSProperties } from "react";
import Navbar from "@/components/ui/Navbar";
import "../index.css";
import ThemeToggle from "@/components/ui/ThemeToggle";

const HomePage = () => {
  return (
    <div>
      <div className="pt-2"><Navbar /></div>
      
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-bold">Hey we are the NGONERS</h1>
          
        
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default HomePage;