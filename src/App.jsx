import { useState } from "react";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import SeatGrid from "./components/SeatGrid";
import CharacterTray from "./components/CharacterTray";
import LevelSelect from "./components/LevelSelect";
import { levels } from "./data/levels";
import { useGameState } from "./hooks/useGameState";

function GameScreen({ level, onClear, onBack }) {
  const {
    seatMap,
    placedIds,
    placeCharacter,
    removeCharacter,
    satisfactionMap,
    cleared,
  } = useGameState(level);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (!over) return;
    const character = active.data.current?.character;
    if (!character) return;
    placeCharacter(over.id, character);
  };

  // 클리어 감지 → 부모에게 알림
  if (cleared) onClear(level.id);

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
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

        {/* 레벨 정보 + 뒤로가기 */}
        <div className="text-center relative w-full max-w-md">
          <button
            onClick={onBack}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            ← 레벨 선택
          </button>
          <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
            Level {level.id}
          </span>
          <h2 className="text-xl font-bold text-slate-600 mt-1">
            {level.title}
          </h2>
          <p className="text-sm text-slate-400 mt-1">{level.description}</p>
        </div>

        {/* 클리어 메시지 */}
        {cleared && (
          <div className="px-6 py-3 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-600 font-bold text-lg animate-bounce">
            🎉 모두 만족했어! 레벨 클리어!
          </div>
        )}

        {/* 좌석 그리드 */}
        <SeatGrid
          seats={level.seats}
          cols={level.cols}
          seatMap={seatMap}
          satisfactionMap={satisfactionMap}
          onRemove={removeCharacter}
        />

        {/* 캐릭터 트레이 */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-slate-400">
            캐릭터를 드래그해서 자리에 배치해줘 · 자리를 클릭하면 트레이로
            돌아가
          </p>
          <CharacterTray
            characters={level.characters}
            placedIds={placedIds}
            satisfactionMap={satisfactionMap}
          />
        </div>
      </div>
    </DndContext>
  );
}

export default function App() {
  const [screen, setScreen] = useState("select"); // "select" | "game"
  const [currentLevelId, setCurrentLevelId] = useState(null);
  const [clearedLevels, setClearedLevels] = useState([]);

  const currentLevel = levels.find((l) => l.id === currentLevelId);

  const handleSelectLevel = (id) => {
    setCurrentLevelId(id);
    setScreen("game");
  };

  const handleClear = (levelId) => {
    setClearedLevels((prev) =>
      prev.includes(levelId) ? prev : [...prev, levelId],
    );
  };

  const handleBack = () => {
    setScreen("select");
    setCurrentLevelId(null);
  };

  if (screen === "select") {
    return (
      <LevelSelect
        levels={levels}
        clearedLevels={clearedLevels}
        onSelect={handleSelectLevel}
      />
    );
  }

  return (
    <GameScreen
      level={currentLevel}
      onClear={handleClear}
      onBack={handleBack}
    />
  );
}
