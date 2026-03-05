import PreferenceBadge from "./PreferenceBadge";

export default function CharacterCard({
  character,
  characters,
  isPlaced = false,
}) {
  return (
    <div
      className={`
        flex flex-col items-center gap-2 p-3 rounded-2xl border-2 w-28
        bg-white shadow-sm transition-opacity
        ${isPlaced ? "opacity-30 border-slate-100" : "border-blue-100 cursor-grab active:cursor-grabbing"}
      `}
    >
      {/* 아바타 */}
      <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-2xl">
        {character.emoji}
      </div>

      {/* 이름 */}
      <span className="text-sm font-semibold text-slate-600">
        {character.name}
      </span>

      {/* 조건 배지 */}
      <div className="flex flex-col gap-1 items-center">
        {character.preferences.map((pref) => (
          <PreferenceBadge key={pref} prefKey={pref} characters={characters} />
        ))}
      </div>
    </div>
  );
}
