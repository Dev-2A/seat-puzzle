import PreferenceBadge from "./PreferenceBadge";

export default function CharacterCard({
  character,
  characters,
  isPlaced = false,
  satisfactionResults = null, // [{ pref, satisfied }] | null
}) {
  // 표정 결정
  const getFace = () => {
    if (!satisfactionResults) return "😐"; // 배치 전
    const allOk = satisfactionResults.every((r) => r.satisfied);
    const anyOk = satisfactionResults.some((r) => r.satisfied);
    if (allOk) return "😊";
    if (anyOk) return "😅";
    return "😤";
  };

  // 카드 테두리 색상 결정
  const getCardBorder = () => {
    if (!satisfactionResults) return "border-blue-100";
    const allOk = satisfactionResults.every((r) => r.satisfied);
    const anyOk = satisfactionResults.some((r) => r.satisfied);
    if (allOk) return "border-emerald-300";
    if (anyOk) return "border-amber-300";
    return "border-rose-300";
  };

  return (
    <div
      className={`
        flex flex-col items-center gap-2 p-3 rounded-2xl border-2 w-28
        bg-white shadow-sm transition-all duration-300
        ${isPlaced ? "opacity-30 border-slate-100" : getCardBorder()}
        ${!isPlaced ? "cursor-grab active:cursor-grabbing" : ""}
      `}
    >
      {/* 아바타 + 표정 */}
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-2xl">
          {character.emoji}
        </div>
        {/* 표정 뱃지 */}
        <span className="absolute -bottom-1 -right-1 text-sm leading-none">
          {getFace()}
        </span>
      </div>

      {/* 이름 */}
      <span className="text-sm font-semibold text-slate-600">
        {character.name}
      </span>

      {/* 조건 배지 */}
      <div className="flex flex-col gap-1 items-center">
        {character.preferences.map((pref) => {
          const result = satisfactionResults?.find((r) => r.pref === pref);
          return (
            <PreferenceBadge
              key={pref}
              prefKey={pref}
              characters={characters}
              satisfied={result?.satisfied}
            />
          );
        })}
      </div>
    </div>
  );
}
