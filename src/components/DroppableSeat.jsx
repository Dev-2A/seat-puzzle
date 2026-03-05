import { useDroppable } from "@dnd-kit/core";

export default function DroppableSeat({
  seat,
  character,
  satisfactionResults,
  onRemove,
}) {
  const { isOver, setNodeRef } = useDroppable({ id: seat.id });

  const getBorderStyle = () => {
    if (!character || !satisfactionResults) {
      return seat.type === "window"
        ? "border-blue-300 bg-blue-100 hover:bg-blue-200"
        : "border-slate-200 bg-white hover:bg-slate-50";
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
        w-18 h-18 rounded-2xl border-2 flex items-center justify-center
        transition-all duration-200 shadow-sm
        ${getBorderStyle()}
        ${isOver ? "scale-110 shadow-md brightness-95" : ""}
        ${character ? "cursor-pointer hover:brightness-95" : ""}
      `}
      style={{ width: "4.5rem", height: "4.5rem" }}
      title={
        character
          ? `${character.name} (클릭하면 트레이로 돌아가)`
          : seat.type === "window"
            ? "창가 자리"
            : "통로 자리"
      }
    >
      {character ? (
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-2xl">{character.emoji}</span>
          <span className="text-xs text-slate-500 font-semibold leading-none">
            {character.name}
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-0.5 opacity-30">
          <span className="text-xl">
            {seat.type === "window" ? "🪟" : "💺"}
          </span>
          <span className="text-xs text-slate-400">
            {seat.type === "window" ? "창가" : "통로"}
          </span>
        </div>
      )}
    </div>
  );
}
