import { getPreferenceMeta } from "../data/preferences";

export default function PreferenceBadge({ prefKey, characters, satisfied }) {
  const meta = getPreferenceMeta(prefKey, characters);

  // satisfied가 undefined면 아직 배치 전 → 기본 스타일
  const colorStyle =
    satisfied === undefined
      ? meta.color
      : satisfied
        ? "bg-emerald-100 text-emerald-600 border-emerald-300"
        : "bg-rose-100 text-rose-500 border-rose-300";

  return (
    <span
      className={`
        inline-flex items-center gap-1 px-2 py-0.5
        rounded-full border text-xs font-medium transition-colors duration-300
        ${colorStyle}
      `}
    >
      <span>{meta.icon}</span>
      <span>{meta.label}</span>
      {satisfied === true && <span>✓</span>}
      {satisfied === false && <span>✗</span>}
    </span>
  );
}
