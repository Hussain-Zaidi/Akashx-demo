// components/WordFlip.js
"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/WordFlip.module.css";

const WordFlip = ({ words, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(flipInterval);
  }, [words, interval]);

  return (
    <span className="md:overflow-hidden md:h-10 md:align-top md:inline-block md:w-[100%] md:text-left" style={{background:'inherit'}} >
    <span
      key={index} // Add a unique key to force re-render
      className={styles.flipText}
      >
      {words[index]}
    </span>
      </span>
  );
};

export default WordFlip;
