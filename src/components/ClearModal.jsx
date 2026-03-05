export default function ClearModal({ level, isLastLevel, onNext, onBack }) {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full text-center animate-[fadeInUp_0.3s_ease]">
        {/* 트로피 */}
        <div className="text-6xl mb-4">🏆</div>

        {/* 타이틀 */}
        <h2 className="text-2xl font-bold text-slate-700 mb-1">레벨 클리어!</h2>
        <p className="text-blue-400 font-semibold mb-2">
          Level {level.id} — {level.title}
        </p>

        {/* 만족한 캐릭터들 */}
        <div className="flex justify-center gap-2 my-4 text-3xl">
          {level.characters.map((char) => (
            <span key={char.id} title={char.name}>
              {char.emoji}
            </span>
          ))}
        </div>

        <p className="text-slate-400 text-sm mb-6">
          모두가 원하는 자리에 앉았어! 😊
        </p>

        {/* 버튼 */}
        <div className="flex flex-col gap-3">
          {!isLastLevel && (
            <button
              onClick={onNext}
              className="w-full py-3 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-2xl transition-colors"
            >
              다음 레벨 →
            </button>
          )}
          {isLastLevel && (
            <div className="py-3 bg-emerald-50 border border-emerald-200 text-emerald-600 font-bold rounded-2xl">
              🎊 모든 레벨 완료!
            </div>
          )}
          <button
            onClick={onBack}
            className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-500 font-semibold rounded-2xl transition-colors"
          >
            레벨 선택으로
          </button>
        </div>
      </div>
    </div>
  );
}
