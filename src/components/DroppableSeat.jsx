import { useDroppable } from "@dnd-kit/core";

export default function DroppableSeat({
  seat,
  character,
  satisfactionResults,
  onRemove,
}) {
  const { isOver, setNodeRef } = useDroppable({ id: seat.id });

  // 만족도 기반 테두리 색상 결정
  const getBorderStyle = () => {
    if (!character || !satisfactionResults) {
      return seat.type === "window"
        ? "border-blue-300 bg-blue-100"
        : "border-slate-300 bg-slate-100";
    }
    const allSatisfied = satisfactionResults.every((r) => r.satisfied);
    const anySatisfied = satisfactionResults.some((r) => r.satisfied);

    if (allSatisfied) return "border-emerald-400 bg-emerald-50";
    if (anySatisfied) return "border-amber-300 bg-amber-50";
    return "border-rose-300 bg-rose-50";
  };

  return (
    <div
      ref={setNodeRef}
      onClick={() => character && onRemove(seat.id)}
      className={`
        w-16 h-16 rounded-xl border-2 flex items-center justify-center
        transition-all duration-200 relative
        ${getBorderStyle()}
        ${isOver ? "scale-110 brightness-95" : ""}
        ${character ? "cursor-pointer" : ""}
      `}
      title={
        character
          ? `${character.name} (클릭하면 트레이로 돌아가)`
          : seat.type === "window"
            ? "창가"
            : "통로"
      }
    >
      {character ? (
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-xl">{character.emoji}</span>
          <span className="text-xs text-slate-500 font-medium leading-none">
            {character.name}
          </span>
        </div>
      ) : (
        <span className="text-lg opacity-40">
          {seat.type === "window" ? "🪟" : "💺"}
        </span>
      )}
    </div>
  );
}
