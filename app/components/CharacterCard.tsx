import React from "react";
import Image from "next/image";
import { CharacterCardProps } from "./interfaces";

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="character-card">
      <Image
        src={
          character.image
            ? character.image
            : "https://alanmatoso-lp-harrypotter.vercel.app/assets/profile-photo-error.png"
        }
        alt={character.name}
        className="character-image"
        width={800}
        height={600}
        priority
      />
      <div className="character-details">
        <h2 className="character-name">{character.name}</h2>
        {character.alternate_names.length > 0 && (
          <p className="character-attribute">
            Alternate Names:{" "}
            <span className="character-info">
              {character.alternate_names.join(", ")}
            </span>
          </p>
        )}
        {character.species && (
          <p className="character-attribute">
            Species: <span className="character-info">{character.species}</span>
          </p>
        )}
        {character.gender && (
          <p className="character-attribute">
            Gender: <span className="character-info">{character.gender}</span>
          </p>
        )}
        {character.house && (
          <p className="character-attribute">
            House: <span className="character-info">{character.house}</span>
          </p>
        )}
        {character.dateOfBirth && (
          <p className="character-attribute">
            Date of Birth:{" "}
            <span className="character-info">{character.dateOfBirth}</span>
          </p>
        )}
        {character.yearOfBirth && (
          <p className="character-attribute">
            Year of Birth:{" "}
            <span className="character-info">{character.yearOfBirth}</span>
          </p>
        )}
        <p className="character-attribute">
          Wizard:{" "}
          <span className="character-info">
            {character.wizard ? "Yes" : "No"}
          </span>
        </p>
        {character.ancestry && (
          <p className="character-attribute">
            Ancestry:{" "}
            <span className="character-info">{character.ancestry}</span>
          </p>
        )}
        {character.eyeColour && (
          <p className="character-attribute">
            Eye Colour:{" "}
            <span className="character-info">{character.eyeColour}</span>
          </p>
        )}
        {character.hairColour && (
          <p className="character-attribute">
            Hair Colour:{" "}
            <span className="character-info">{character.hairColour}</span>
          </p>
        )}
        {character.wand && (
          <p className="character-attribute">
            Wand: Wood -{" "}
            <span className="character-info">{character.wand.wood}</span>, Core
            - <span className="character-info">{character.wand.core}</span>,
            Length -{" "}
            <span className="character-info">{character.wand.length}</span>
          </p>
        )}
        {character.patronus && (
          <p className="character-attribute">
            Patronus:{" "}
            <span className="character-info">{character.patronus}</span>
          </p>
        )}
        <p className="character-attribute">
          Hogwarts Student:{" "}
          <span className="character-info">
            {character.hogwartsStudent ? "Yes" : "No"}
          </span>
        </p>
        <p className="character-attribute">
          Hogwarts Staff:{" "}
          <span className="character-info">
            {character.hogwartsStaff ? "Yes" : "No"}
          </span>
        </p>
        {character.actor && (
          <p className="character-attribute">
            Actor: <span className="character-info">{character.actor}</span>
          </p>
        )}
        {character.alternate_actors.length > 0 && (
          <p className="character-attribute">
            Alternate Actors:{" "}
            <span className="character-info">
              {character.alternate_actors.join(", ")}
            </span>
          </p>
        )}
        <p className="character-attribute">
          Alive:{" "}
          <span className="character-info">
            {character.alive ? "Yes" : "No"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
