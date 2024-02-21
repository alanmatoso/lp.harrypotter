"use client";

import React, { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import { Character } from "./components/interfaces";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters"
      );
      if (response.ok) {
        const data = await response.json();
        setCharacters(data);
      } else {
        throw new Error("Failed to fetch characters");
      }
    } catch (error) {
      console.error(error);
    }
  };
  fetchCharacters();

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      Math.min(prevIndex + 1, characters.length - 1)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="flex flex-col items-center justify-between">
      {characters.length > 0 && (
        <>
          <div className="page-tittle">HarryVerse</div>
          <div className="page-subtittle">
            Dive Deep into Harry Potter Characters
          </div>

          <div className="cards-container">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="nav-previus-button"
            />
            <CharacterCard character={characters[currentIndex]} />
            <button
              onClick={handleNext}
              disabled={currentIndex === characters.length - 1}
              className="nav-next-button"
            />
          </div>
        </>
      )}
    </div>
  );
}
