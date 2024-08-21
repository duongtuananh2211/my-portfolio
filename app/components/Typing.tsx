import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingProps {
  text: string;
  speed?: number;
}
export const TypingAnimation: React.FC<TypingProps> = ({
  text,
  speed = 100,
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (displayText.length < text.length) {
        setDisplayText(text.slice(0, displayText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </motion.div>
  );
};
