import { getPreferenceMeta } from "../data/preferences";

export default function PreferenceBadge({ prefKey, characters }) {
  const meta = getPreferenceMeta(prefKey, characters);

  return (
    <span
      className={`
        inline-flex items-center gap-1 px-2 py-0.5
        rounded-full border text-xs font-medium
        ${meta.color}
      `}
    >
      <span>{meta.icon}</span>
      <span>{meta.label}</span>
    </span>
  );
}
