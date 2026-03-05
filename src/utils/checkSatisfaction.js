/**
 * 특정 좌석의 인접 좌석 id 목록을 반환해
 * 인접 = 상하좌우 + 대각선 (같은 행에서 바로 옆)
 */
function getAdjacentSeatIds(seatId, seats, cols) {
  const seat = seats.find((s) => s.id === seatId);
  if (!seat) return [];

  return seats
    .filter((s) => {
      const rowDiff = Math.abs(s.row - seat.row);
      const colDiff = Math.abs(s.col - seat.col);
      return rowDiff <= 1 && colDiff <= 1 && !(rowDiff === 0 && colDiff === 0);
    })
    .map((s) => s.id);
}

/**
 * 단일 캐릭터의 조건 만족 여부를 판정
 * @param {object} character - 캐릭터 객체
 * @param {string} seatId - 현재 앉은 좌석 id
 * @param {object} seatMap - { seatId: character } 전체 배치 현황
 * @param {Array} seats - 레벨의 전체 좌석 배열
 * @param {number} cols - 그리드 열 수
 * @returns {{ pref: string, satisfied: boolean }[]}
 */
export function checkCharacterSatisfaction(
  character,
  seatId,
  seatMap,
  seats,
  cols,
) {
  const currentSeat = seats.find((s) => s.id === seatId);
  if (!currentSeat) return [];

  const adjacentIds = getAdjacentSeatIds(seatId, seats, cols);
  const adjacentCharacters = adjacentIds
    .map((id) => seatMap[id])
    .filter(Boolean);

  return character.preferences.map((pref) => {
    let satisfied = false;

    if (pref === "likes_window") {
      satisfied = currentSeat.type === "window";
    } else if (pref === "hates_noise") {
      // 인접 캐릭터가 없으면 조용한 자리로 간주
      satisfied = adjacentCharacters.length === 0;
    } else if (pref === "wants_alone") {
      satisfied = adjacentCharacters.length === 0;
    } else if (pref === "hates_smell") {
      // 인접에 "smelly" 특성 캐릭터가 없으면 만족 (현재 레벨엔 없음)
      satisfied = !adjacentCharacters.some((c) => c.traits?.includes("smelly"));
    } else if (pref.startsWith("wants_friend:")) {
      const friendId = pref.split(":")[1];
      satisfied = adjacentCharacters.some((c) => c.id === friendId);
    }

    return { pref, satisfied };
  });
}

/**
 * 전체 배치의 만족도를 계산
 * @returns {{ characterId: string, results: { pref, satisfied }[] }[]}
 */
export function checkAllSatisfaction(seatMap, seats, cols) {
  return Object.entries(seatMap).map(([seatId, character]) => ({
    characterId: character.id,
    seatId,
    results: checkCharacterSatisfaction(
      character,
      seatId,
      seatMap,
      seats,
      cols,
    ),
  }));
}

/**
 * 모든 캐릭터가 배치되었고 모든 조건이 충족됐는지 확인
 */
export function isLevelClear(seatMap, level) {
  const { seats, cols, characters } = level;

  // 모든 캐릭터가 배치됐는지 확인
  const placedIds = Object.values(seatMap).map((c) => c.id);
  const allPlaced = characters.every((c) => placedIds.includes(c.id));
  if (!allPlaced) return false;

  // 모든 조건 만족 여부 확인
  const allResults = checkAllSatisfaction(seatMap, seats, cols);
  return allResults.every(({ results }) =>
    results.every(({ satisfied }) => satisfied),
  );
}
