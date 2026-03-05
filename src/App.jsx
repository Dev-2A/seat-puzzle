import SeatGrid from "./components/SeatGrid";
import CharacterTray from "./components/CharacterTray";
import { levels } from "./data/levels";

export default function App() {
  const level = levels[0];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center gap-8 p-8">
      {/* 헤더 */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-400 mb-1">
          🧩 Is This Seat Taken?
        </h1>
        <p className="text-slate-400 text-sm">
          모두가 원하는 자리에 앉을 수 있도록 도와줘!
        </p>
      </div>

      {/* 레벨 정보 */}
      <div className="text-center">
        <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
          Level 1
        </span>
        <h2 className="text-xl font-bold text-slate-600 mt-1">{level.title}</h2>
        <p className="text-sm text-slate-400 mt-1">{level.description}</p>
      </div>

      {/* 좌석 그리드 */}
      <SeatGrid seats={level.seats} cols={level.cols} />

      {/* 캐릭터 트레이 */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs text-slate-400">캐릭터를 자리에 배치해줘</p>
        <CharacterTray characters={level.characters} />
      </div>
    </div>
  );
}
