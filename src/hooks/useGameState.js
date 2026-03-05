import { useState } from "react";

export function useGameState(level) {
  // { seatId: character } 형태로 배치 현황 관리
  const [seatMap, setSeatMap] = useState({});

  // 배치된 캐릭터 id 목록
  const placedIds = Object.values(seatMap).map((c) => c.id);

  // 특정 좌석에 캐릭터 배치
  const placeCharacter = (seatId, character) => {
    setSeatMap((prev) => {
      const next = { ...prev };

      // 이미 같은 캐릭터가 다른 자리에 있으면 제거
      Object.keys(next).forEach((key) => {
        if (next[key].id === character.id) delete next[key];
      });

      // 해당 자리에 이미 다른 캐릭터가 있으면 트레이로 돌려보냄 (그냥 덮어씌움)
      next[seatId] = character;
      return next;
    });
  };

  // 좌석에서 캐릭터 제거 (트레이로 돌려보내기)
  const removeCharacter = (seatId) => {
    setSeatMap((prev) => {
      const next = { ...prev };
      delete next[seatId];
      return next;
    });
  };

  return { seatMap, placedIds, placeCharacter, removeCharacter };
}
