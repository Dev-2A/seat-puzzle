// 좌석 type: "window" | "aisle" | "normal"
// 캐릭터 preferences: 조건 배열

export const levels = [
  {
    id: 1,
    title: "버스 첫 출발 🚌",
    description: "모두가 원하는 자리에 앉을 수 있도록 도와줘!",
    cols: 4,
    rows: 2,
    seats: [
      { id: "s1", row: 0, col: 0, type: "window" },
      { id: "s2", row: 0, col: 1, type: "aisle" },
      { id: "s3", row: 0, col: 2, type: "aisle" },
      { id: "s4", row: 0, col: 3, type: "window" },
      { id: "s5", row: 1, col: 0, type: "window" },
      { id: "s6", row: 1, col: 1, type: "aisle" },
      { id: "s7", row: 1, col: 2, type: "aisle" },
      { id: "s8", row: 1, col: 3, type: "window" },
    ],
    characters: [
      { id: "c1", name: "토리", emoji: "🐱", preferences: ["likes_window"] },
      { id: "c2", name: "두부", emoji: "🐶", preferences: ["wants_friend:c3"] },
      { id: "c3", name: "모카", emoji: "🐰", preferences: ["wants_friend:c2"] },
      { id: "c4", name: "솔이", emoji: "🦊", preferences: ["hates_noise"] },
    ],
  },
];
