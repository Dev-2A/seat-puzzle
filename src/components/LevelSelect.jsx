export default function LevelSelect({ levels, clearedLevels, onSelect }) {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center gap-8 p-8">
      {/* 헤더 */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-400 mb-2">
          🧩 Is This Seat Taken?
        </h1>
        <p className="text-slate-400 text-sm">레벨을 선택해줘!</p>
      </div>

      {/* 레벨 카드 목록 */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {levels.map((level) => {
          const isCleared = clearedLevels.includes(level.id);

          return (
            <button
              key={level.id}
              onClick={() => onSelect(level.id)}
              className={`
                w-full p-5 rounded-2xl border-2 text-left
                transition-all duration-200 shadow-sm
                ${
                  isCleared
                    ? "bg-emerald-50 border-emerald-300 hover:bg-emerald-100"
                    : "bg-white border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                }
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                      Level {level.id}
                    </span>
                    {isCleared && (
                      <span className="text-xs font-bold text-emerald-500">
                        ✓ 클리어
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-bold text-slate-700">
                    {level.title}
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">
                    {level.description}
                  </p>
                </div>
                <div className="text-2xl ml-4">{isCleared ? "🏆" : "▶️"}</div>
              </div>

              {/* 캐릭터 미리보기 */}
              <div className="flex gap-1 mt-3">
                {level.characters.map((char) => (
                  <span key={char.id} className="text-xl" title={char.name}>
                    {char.emoji}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
