import CharacterCard from "./CharacterCard";

export default function CharacterTray({ characters, placedIds = [] }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center p-4 bg-white/70 rounded-2xl border border-blue-100 shadow-sm max-w-lg">
      {characters.map((char) => (
        <CharacterCard
          key={char.id}
          character={char}
          characters={characters}
          isPlaced={placedIds.includes(char.id)}
        />
      ))}
    </div>
  );
}
