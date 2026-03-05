export default function LevelSelect({ levels, clearedLevels, onSelect }) {
  const totalCleared = clearedLevels.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 flex flex-col items-center justify-center gap-8 p-8">
      {/* 헤더 */}
      <div className="text-center">
        <div className="text-5xl mb-3">🧩</div>
        <h1 className="text-3xl font-bold text-blue-400 mb-2">
          Is This Seat Taken?
        </h1>
        <p className="text-slate-400 text-sm">
          모두가 원하는 자리에 앉을 수 있도록 도와줘!
        </p>
      </div>

      {/* 진행률 */}
      <div className="w-full max-w-sm">
        <div className="flex justify-between text-xs text-slate-400 mb-1 px-1">
          <span>진행률</span>
          <span>
            {totalCleared} / {levels.length} 클리어
          </span>
        </div>
        <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-300 rounded-full transition-all duration-500"
            style={{ width: `${(totalCleared / levels.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 레벨 카드 */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {levels.map((level) => {
          const isCleared = clearedLevels.includes(level.id);

          return (
            <button
              key={level.id}
              onClick={() => onSelect(level.id)}
              className={`
                w-full p-5 rounded-2xl border-2 text-left
                transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5
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
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-100 px-2 py-0.5 rounded-full">
                        ✓ 클리어
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-bold text-slate-700">
                    {level.title}
                  </h2>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {level.description}
                  </p>
                </div>
                <div className="text-2xl ml-4 flex-shrink-0">
                  {isCleared ? "🏆" : "▶️"}
                </div>
              </div>

              {/* 캐릭터 미리보기 */}
              <div className="flex gap-1 mt-3">
                {level.characters.map((char) => (
                  <span
                    key={char.id}
                    className="text-xl w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-blue-100"
                    title={char.name}
                  >
                    {char.emoji}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* 전체 클리어 메시지 */}
      {totalCleared === levels.length && (
        <div className="text-center py-3 px-6 bg-yellow-50 border border-yellow-200 rounded-2xl text-yellow-600 font-bold animate-bounce">
          🎊 모든 레벨을 클리어했어!
        </div>
      )}
    </div>
  );
}
