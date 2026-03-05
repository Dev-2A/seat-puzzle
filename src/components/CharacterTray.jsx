function CharacterCard({ character }) {
  return (
    <div className="flex flex-col items-center gap-1 cursor-grab">
      <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center text-2xl shadow-sm">
        {character.emoji}
      </div>
      <span className="text-xs text-slate-500 font-medium">
        {character.name}
      </span>
    </div>
  );
}

export default function CharacterTray({ characters }) {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-2xl border border-blue-100 shadow-sm">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}
