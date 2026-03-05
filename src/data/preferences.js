// 조건 key → 표시용 정보
export const PREFERENCE_META = {
  likes_window: {
    icon: "🪟",
    label: "창가 좋아해",
    color: "bg-sky-100 text-sky-500 border-sky-200",
  },
  hates_noise: {
    icon: "🔇",
    label: "조용한 자리",
    color: "bg-purple-100 text-purple-500 border-purple-200",
  },
  wants_alone: {
    icon: "🙏",
    label: "혼자 앉을래",
    color: "bg-orange-100 text-orange-500 border-orange-200",
  },
  hates_smell: {
    icon: "🌬️",
    label: "냄새 싫어",
    color: "bg-green-100 text-green-500 border-green-200",
  },
  // "wants_friend:c2" 처럼 동적 키는 아래 함수로 처리
};

// "wants_friend:c2" → { icon, label, color } 반환
export function getPreferenceMeta(prefKey, characters = []) {
  if (prefKey.startsWith("wants_friend:")) {
    const friendId = prefKey.split(":")[1];
    const friend = characters.find((c) => c.id === friendId);
    return {
      icon: friend ? friend.emoji : "👥",
      label: friend ? `${friend.name} 옆에 앉을래` : "친구 옆에",
      color: "bg-pink-100 text-pink-500 border-pink-200",
    };
  }
  return (
    PREFERENCE_META[prefKey] ?? {
      icon: "❓",
      label: prefKey,
      color: "bg-gray-100 text-gray-400 border-gray-200",
    }
  );
}
