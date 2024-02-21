"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Character {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

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
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {characters.length > 0 && (
        <>
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            Previous
          </button>
          <div className="character-card">
            <img
              src={characters[currentIndex].image}
              alt={characters[currentIndex].name}
              className="character-image"
            />
            <div className="character-details">
              <h2 className="character-name">
                {characters[currentIndex].name}
              </h2>
              <p className="character-info">
                Alternate Names:{" "}
                {characters[currentIndex].alternate_names.join(", ")}
              </p>
              <p className="character-info">
                Species: {characters[currentIndex].species}
              </p>
              <p className="character-info">
                Gender: {characters[currentIndex].gender}
              </p>
              <p className="character-info">
                House: {characters[currentIndex].house}
              </p>
              <p className="character-info">
                Date of Birth: {characters[currentIndex].dateOfBirth}
              </p>
              <p className="character-info">
                Year of Birth: {characters[currentIndex].yearOfBirth}
              </p>
              <p className="character-info">
                Wizard: {characters[currentIndex].wizard ? "Yes" : "No"}
              </p>
              <p className="character-info">
                Ancestry: {characters[currentIndex].ancestry}
              </p>
              <p className="character-info">
                Eye Colour: {characters[currentIndex].eyeColour}
              </p>
              <p className="character-info">
                Hair Colour: {characters[currentIndex].hairColour}
              </p>
              <p className="character-info">
                Wand: Wood - {characters[currentIndex].wand.wood}, Core -{" "}
                {characters[currentIndex].wand.core}, Length -{" "}
                {characters[currentIndex].wand.length}"
              </p>
              <p className="character-info">
                Patronus: {characters[currentIndex].patronus}
              </p>
              <p className="character-info">
                Hogwarts Student:{" "}
                {characters[currentIndex].hogwartsStudent ? "Yes" : "No"}
              </p>
              <p className="character-info">
                Hogwarts Staff:{" "}
                {characters[currentIndex].hogwartsStaff ? "Yes" : "No"}
              </p>
              <p className="character-info">
                Actor: {characters[currentIndex].actor}
              </p>
              {characters[currentIndex].alternate_actors.length > 0 && (
                <p className="character-info">
                  Alternate Actors:{" "}
                  {characters[currentIndex].alternate_actors.join(", ")}
                </p>
              )}
              <p className="character-info">
                Alive: {characters[currentIndex].alive ? "Yes" : "No"}
              </p>
            </div>
            <div className="navigation"></div>
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex === characters.length - 1}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}
