import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[]; // Array of texts to type
  typingSpeed?: number; // Speed of typing (ms per character)
  pauseDuration?: number; // Pause before switching to the next text (ms)
  loop?: boolean; // Whether the animation should loop
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  typingSpeed = 150,
  pauseDuration = 2000,
  loop = true,
  className = "text-base",
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout | null = null;

    if (isTyping) {
      // Typing logic
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
        setCharIndex((prev) => prev + 1);

        if (charIndex === texts[currentTextIndex].length - 1) {
          clearInterval(typingInterval!); // Stop typing
          setIsTyping(false); // Pause typing
          setTimeout(() => {
            setDisplayedText(""); // Clear the text
            setCharIndex(0); // Reset character index
            setCurrentTextIndex((prevIndex) =>
              loop ? (prevIndex + 1) % texts.length : prevIndex + 1
            ); // Move to the next text
            setIsTyping(true); // Restart typing
          }, pauseDuration);
        }
      }, typingSpeed);
    }

    return () => {
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [isTyping, charIndex, texts, currentTextIndex, loop, typingSpeed, pauseDuration]);

  return <span className={className}>{displayedText}</span>;
};

export default TypingAnimation;
