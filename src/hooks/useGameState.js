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

  // 만족도 결과: { characterId, seatId, results[] }[]
  const satisfactionMap = useMemo(() => {
    const results = checkAllSatisfaction(seatMap, level.seats, level.cols);
    // characterId → results 로 빠르게 조회할 수 있도록 변환
    return Object.fromEntries(results.map((r) => [r.characterId, r.results]));
  }, [seatMap, level]);

  // 클리어 여부
  const cleared = useMemo(() => isLevelClear(seatMap, level), [seatMap, level]);

  return {
    seatMap,
    placedIds,
    placeCharacter,
    removeCharacter,
    satisfactionMap,
    cleared,
  };
}
