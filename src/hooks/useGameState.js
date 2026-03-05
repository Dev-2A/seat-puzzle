import { useState, useMemo } from "react";
import { checkAllSatisfaction, isLevelClear } from "../utils/checkSatisfaction";

export function useGameState(level) {
  const [seatMap, setSeatMap] = useState({});

  const placedIds = Object.values(seatMap).map((c) => c.id);

  const placeCharacter = (seatId, character) => {
    setSeatMap((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (next[key].id === character.id) delete next[key];
      });
      next[seatId] = character;
      return next;
    });
  };

  const removeCharacter = (seatId) => {
    setSeatMap((prev) => {
      const next = { ...prev };
      delete next[seatId];
      return next;
    });
  };

  const satisfactionMap = useMemo(() => {
    const results = checkAllSatisfaction(seatMap, level.seats, level.cols);
    return Object.fromEntries(results.map((r) => [r.characterId, r.results]));
  }, [seatMap, level]);

  const cleared = useMemo(() => isLevelClear(seatMap, level), [seatMap, level]);

  // 레벨 리셋 (다음 레벨 이동 시 호출)
  const resetGame = () => setSeatMap({});

  return {
    seatMap,
    placedIds,
    placeCharacter,
    removeCharacter,
    satisfactionMap,
    cleared,
    resetGame,
  };
}
