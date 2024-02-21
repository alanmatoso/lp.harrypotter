"use client";

import Image from "next/image";
import React, { useState } from "react";

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
    <div className="flex flex-col items-center justify-between">
      {characters.length > 0 && (
        <>
          <div className="page-tittle">HarryVerse</div>
          <div className="page-subtittle">
            Dive Deep into Harry Potter's Characters
          </div>

          <div className="cards-container">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="nav-previus-button"
            />
            <div className="character-card">
              <Image
                src={
                  characters[currentIndex].image
                    ? characters[currentIndex].image
                    : "https://alanmatoso-lp-harrypotter.vercel.app/assets/profile-photo-error.png"
                }
                alt={characters[currentIndex].name}
                className="character-image"
                width={800}
                height={600}
                priority
              />
              <div className="character-details">
                <h2 className="character-name">
                  {characters[currentIndex].name}
                </h2>
                {characters[currentIndex].alternate_names.length > 0 && (
                  <p className="character-attribute">
                    Alternate Names:{" "}
                    <span className="character-info">
                      {characters[currentIndex].alternate_names.join(", ")}
                    </span>
                  </p>
                )}
                {characters[currentIndex].species && (
                  <p className="character-attribute">
                    Species:{" "}
                    <span className="character-info">
                      {characters[currentIndex].species}
                    </span>
                  </p>
                )}
                {characters[currentIndex].gender && (
                  <p className="character-attribute">
                    Gender:{" "}
                    <span className="character-info">
                      {characters[currentIndex].gender}
                    </span>
                  </p>
                )}
                {characters[currentIndex].house && (
                  <p className="character-attribute">
                    House:{" "}
                    <span className="character-info">
                      {characters[currentIndex].house}
                    </span>
                  </p>
                )}
                {characters[currentIndex].dateOfBirth && (
                  <p className="character-attribute">
                    Date of Birth:{" "}
                    <span className="character-info">
                      {characters[currentIndex].dateOfBirth}
                    </span>
                  </p>
                )}
                {characters[currentIndex].yearOfBirth && (
                  <p className="character-attribute">
                    Year of Birth:{" "}
                    <span className="character-info">
                      {characters[currentIndex].yearOfBirth}
                    </span>
                  </p>
                )}
                <p className="character-attribute">
                  Wizard:{" "}
                  <span className="character-info">
                    {characters[currentIndex].wizard ? "Yes" : "No"}
                  </span>
                </p>
                {characters[currentIndex].ancestry && (
                  <p className="character-attribute">
                    Ancestry:{" "}
                    <span className="character-info">
                      {characters[currentIndex].ancestry}
                    </span>
                  </p>
                )}
                {characters[currentIndex].eyeColour && (
                  <p className="character-attribute">
                    Eye Colour:{" "}
                    <span className="character-info">
                      {characters[currentIndex].eyeColour}
                    </span>
                  </p>
                )}
                {characters[currentIndex].hairColour && (
                  <p className="character-attribute">
                    Hair Colour:{" "}
                    <span className="character-info">
                      {characters[currentIndex].hairColour}
                    </span>
                  </p>
                )}
                {characters[currentIndex].wand && (
                  <p className="character-attribute">
                    Wand: Wood -{" "}
                    <span className="character-info">
                      {characters[currentIndex].wand.wood}
                    </span>
                    , Core -{" "}
                    <span className="character-info">
                      {characters[currentIndex].wand.core}
                    </span>
                    , Length -{" "}
                    <span className="character-info">
                      {characters[currentIndex].wand.length}
                    </span>
                  </p>
                )}
                {characters[currentIndex].patronus && (
                  <p className="character-attribute">
                    Patronus:{" "}
                    <span className="character-info">
                      {characters[currentIndex].patronus}
                    </span>
                  </p>
                )}
                <p className="character-attribute">
                  Hogwarts Student:{" "}
                  <span className="character-info">
                    {characters[currentIndex].hogwartsStudent ? "Yes" : "No"}
                  </span>
                </p>
                <p className="character-attribute">
                  Hogwarts Staff:{" "}
                  <span className="character-info">
                    {characters[currentIndex].hogwartsStaff ? "Yes" : "No"}
                  </span>
                </p>
                {characters[currentIndex].actor && (
                  <p className="character-attribute">
                    Actor:{" "}
                    <span className="character-info">
                      {characters[currentIndex].actor}
                    </span>
                  </p>
                )}
                {characters[currentIndex].alternate_actors.length > 0 && (
                  <p className="character-attribute">
                    Alternate Actors:{" "}
                    <span className="character-info">
                      {characters[currentIndex].alternate_actors.join(", ")}
                    </span>
                  </p>
                )}
                <p className="character-attribute">
                  Alive:{" "}
                  <span className="character-info">
                    {characters[currentIndex].alive ? "Yes" : "No"}
                  </span>
                </p>
              </div>
            </div>
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
