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
import ClearModal from "./components/ClearModal";
import { levels } from "./data/levels";
import { useGameState } from "./hooks/useGameState";

function GameScreen({ level, clearedLevels, onClear, onNext, onBack }) {
  const {
    seatMap,
    placedIds,
    placeCharacter,
    removeCharacter,
    satisfactionMap,
    cleared,
    resetGame,
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

  const isLastLevel = level.id === levels[levels.length - 1].id;

  const handleNext = () => {
    resetGame();
    onNext(level.id);
  };

  const handleBack = () => {
    resetGame();
    onBack();
  };

  const handleReset = () => resetGame();

  if (cleared && !clearedLevels.includes(level.id)) {
    onClear(level.id);
  }

  const satisfiedCount = Object.entries(satisfactionMap).filter(([, results]) =>
    results.every((r) => r.satisfied),
  ).length;

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 flex flex-col items-center justify-center gap-6 p-8">
        {/* 헤더 */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-400 mb-1">
            🧩 Is This Seat Taken?
          </h1>
        </div>

        {/* 레벨 정보 바 */}
        <div className="flex items-center justify-between w-full max-w-md bg-white/80 rounded-2xl px-5 py-3 shadow-sm border border-blue-100">
          <button
            onClick={handleBack}
            className="text-sm text-slate-400 hover:text-slate-600 transition-colors font-medium"
          >
            ← 뒤로
          </button>
          <div className="text-center">
            <p className="text-xs font-bold text-blue-300 uppercase tracking-widest">
              Level {level.id}
            </p>
            <p className="text-sm font-bold text-slate-600">{level.title}</p>
          </div>
          <button
            onClick={handleReset}
            className="text-sm text-slate-400 hover:text-rose-400 transition-colors font-medium"
            title="처음부터 다시"
          >
            ↺ 초기화
          </button>
        </div>

        {/* 진행 상황 카운터 */}
        <div className="flex items-center gap-3">
          <p className="text-xs text-slate-400">{level.description}</p>
          <span className="text-xs font-bold text-blue-400 bg-blue-100 px-2 py-0.5 rounded-full">
            😊 {satisfiedCount} / {level.characters.length}
          </span>
        </div>

        {/* 좌석 그리드 */}
        <div className="bg-white/60 p-6 rounded-3xl shadow-sm border border-blue-100">
          <SeatGrid
            seats={level.seats}
            cols={level.cols}
            seatMap={seatMap}
            satisfactionMap={satisfactionMap}
            onRemove={removeCharacter}
          />
        </div>

        {/* 캐릭터 트레이 */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-slate-400">
            드래그해서 자리 배치 · 자리 클릭으로 트레이 복귀
          </p>
          <CharacterTray
            characters={level.characters}
            placedIds={placedIds}
            satisfactionMap={satisfactionMap}
          />
        </div>
      </div>

      {/* 클리어 모달 */}
      {cleared && (
        <ClearModal
          level={level}
          isLastLevel={isLastLevel}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </DndContext>
  );
}

export default function App() {
  const [screen, setScreen] = useState("select");
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

  const handleNext = (currentLevelId) => {
    const nextLevel = levels.find((l) => l.id === currentLevelId + 1);
    if (nextLevel) setCurrentLevelId(nextLevel.id);
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
      clearedLevels={clearedLevels}
      onClear={handleClear}
      onNext={handleNext}
      onBack={handleBack}
    />
  );
}
