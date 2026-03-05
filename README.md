# 🧩 Is This Seat Taken?

> 모두가 원하는 자리에 앉을 수 있도록 도와주는 미니 퍼즐 게임

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss)
![dnd-kit](https://img.shields.io/badge/dnd--kit-latest-FF6B6B?style=flat-square)

## 🎮 게임 소개

각 캐릭터는 저마다의 **자리 선호 조건**을 가지고 있어요.  
드래그앤드롭으로 캐릭터를 배치하고, 모두를 😊 만족시키면 레벨 클리어!

### 조건 종류

| 조건 | 설명 |
| --- | --- |
| 🪟 창가 좋아해 | 창가 자리에 앉아야 함 |
| 🔇 조용한 자리 | 인접한 캐릭터가 없어야 함 |
| 👥 친구 옆에 | 특정 캐릭터와 인접한 자리에 앉아야 함 |
| 🙏 혼자 앉을래 | 인접한 캐릭터가 없어야 함 |

### 레벨 구성

| 레벨 | 제목 | 인원 | 특징 |
| --- | --- | --- | --- |
| 1 | 🚌 버스 첫 출발 | 4명 | 기본 조건 |
| 2 | 🎬 영화관 데이트 | 6명 | 복합 조건 |
| 3 | 🍽️ 레스토랑 디너 | 8명 | 고난이도 |

## 🕹️ 플레이 방법

1. 레벨을 선택해요
2. 하단 트레이에서 캐릭터를 **드래그**해서 좌석에 놓아요
3. 조건 배지가 🟢 초록색이 되면 그 조건은 충족!
4. 모든 캐릭터가 😊 가 되면 레벨 클리어!
5. 자리를 **클릭**하면 캐릭터가 트레이로 돌아가요

## 🛠️ 기술 스택

- **React 18** — UI 컴포넌트
- **Vite 5** — 빌드 도구
- **Tailwind CSS 3** — 스타일링
- **@dnd-kit/core** — 드래그앤드롭

## 🚀 로컬 실행

```bash
git clone https://github.com/Dev-2A/seat-puzzle.git
cd seat-puzzle
npm install
npm run dev
```

`http://localhost:5173` 에서 확인할 수 있어요.

## 📁 프로젝트 구조

```text
seat-puzzle/
├── src/
│   ├── components/
│   │   ├── SeatGrid.jsx          # 좌석 그리드
│   │   ├── DroppableSeat.jsx     # 드롭 가능한 좌석
│   │   ├── CharacterTray.jsx     # 캐릭터 대기 트레이
│   │   ├── DraggableCharacter.jsx # 드래그 가능한 캐릭터
│   │   ├── CharacterCard.jsx     # 캐릭터 카드 (감정 표정 포함)
│   │   ├── PreferenceBadge.jsx   # 조건 배지
│   │   ├── LevelSelect.jsx       # 레벨 선택 화면
│   │   └── ClearModal.jsx        # 클리어 모달
│   ├── data/
│   │   ├── levels.js             # 레벨 데이터
│   │   └── preferences.js        # 조건 메타데이터
│   ├── hooks/
│   │   └── useGameState.js       # 게임 상태 관리 훅
│   ├── utils/
│   │   └── checkSatisfaction.js  # 조건 판정 로직
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
```

## 📝 개발 기록

| 단계 | 내용 |
| --- | --- |
| Step 1 | 프로젝트 초기 설정 (Vite + React + Tailwind + DnD Kit) |
| Step 2 | 기본 레이아웃 & 좌석 그리드 |
| Step 3 | 캐릭터 카드 & 조건 힌트 배지 |
| Step 4 | 드래그앤드롭 배치 시스템 |
| Step 5 | 조건 판정 로직 & 만족도 색상 피드백 |
| Step 6 | 감정 표정 & 실시간 배지 피드백 |
| Step 7 | 3개 레벨 데이터 & 레벨 선택 화면 |
| Step 8 | 클리어 모달 & 다음 레벨 전환 |
| Step 9 | 파스텔 블루 테마 & 전체 폴리싱 |
| Step 10 | README & v0.1.0 릴리즈 |

## 📜 라이선스

MIT License © 2026 [Dev-2A](https://github.com/Dev-2A)
