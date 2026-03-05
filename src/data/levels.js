export const levels = [
  {
    id: 1,
    title: "버스 첫 출발 🚌",
    description: "4명을 적절한 자리에 배치해줘. 조건이 간단해!",
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
  {
    // ✅ 수정: 6/6 꽉 찬 그리드 → hates_noise 제거, wants_friend만 사용
    id: 2,
    title: "영화관 데이트 🎬",
    description: "6명의 조건이 복잡해졌어. 잘 살펴봐!",
    cols: 3,
    rows: 2,
    seats: [
      { id: "s1", row: 0, col: 0, type: "window" },
      { id: "s2", row: 0, col: 1, type: "aisle" },
      { id: "s3", row: 0, col: 2, type: "window" },
      { id: "s4", row: 1, col: 0, type: "window" },
      { id: "s5", row: 1, col: 1, type: "aisle" },
      { id: "s6", row: 1, col: 2, type: "window" },
    ],
    characters: [
      {
        id: "c1",
        name: "토리",
        emoji: "🐱",
        preferences: ["likes_window", "wants_friend:c2"],
      },
      {
        id: "c2",
        name: "두부",
        emoji: "🐶",
        preferences: ["wants_friend:c1", "wants_friend:c3"],
      },
      {
        id: "c3",
        name: "모카",
        emoji: "🐰",
        preferences: ["likes_window", "wants_friend:c2"],
      },
      { id: "c4", name: "솔이", emoji: "🦊", preferences: ["likes_window"] },
      { id: "c5", name: "루나", emoji: "🐻", preferences: ["wants_friend:c6"] },
      {
        id: "c6",
        name: "코코",
        emoji: "🐼",
        preferences: ["wants_friend:c5", "likes_window"],
      },
    ],
    // 정답 힌트: c1=s1, c2=s2, c3=s3, c4=s4, c5=s5, c6=s6
    // (또는 c1=s3,c2=s2,c3=s1 등 대칭 해도 됨)
  },
  {
    // ✅ 수정: hates_noise·wants_alone 제거, 창가 5명→4명으로 조정
    id: 3,
    title: "레스토랑 디너 🍽️",
    description: "8명의 까다로운 손님들. 모두를 만족시킬 수 있을까?",
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
      {
        id: "c1",
        name: "토리",
        emoji: "🐱",
        preferences: ["likes_window", "wants_friend:c5"],
      },
      {
        id: "c2",
        name: "두부",
        emoji: "🐶",
        preferences: ["wants_friend:c3", "wants_friend:c4"],
      },
      { id: "c3", name: "모카", emoji: "🐰", preferences: ["wants_friend:c2"] },
      {
        id: "c4",
        name: "솔이",
        emoji: "🦊",
        preferences: ["likes_window", "wants_friend:c2"],
      },
      {
        id: "c5",
        name: "루나",
        emoji: "🐻",
        preferences: ["likes_window", "wants_friend:c1"],
      },
      { id: "c6", name: "코코", emoji: "🐼", preferences: ["wants_friend:c7"] },
      {
        id: "c7",
        name: "별이",
        emoji: "🐯",
        preferences: ["likes_window", "wants_friend:c6"],
      },
      { id: "c8", name: "하루", emoji: "🦝", preferences: ["wants_friend:c6"] },
    ],
    // 정답: c1=s1, c2=s3, c3=s2, c4=s4, c5=s5, c6=s7, c7=s8, c8=s6
  },
];
