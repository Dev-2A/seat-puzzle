import { useDroppable } from "@dnd-kit/core";

export default function DroppableSeat({ seat, character, onRemove }) {
  const { isOver, setNodeRef } = useDroppable({ id: seat.id });

  const typeStyle = {
    window: "border-blue-300 bg-blue-100",
    aisle: "border-slate-300 bg-slate-100",
    normal: "border-slate-300 bg-slate-100",
  };

  return (
    <div
      ref={setNodeRef}
      onClick={() => character && onRemove(seat.id)}
      className={`
        w-16 h-16 rounded-xl border-2 flex items-center justify-center
        transition-all duration-150 relative
        ${typeStyle[seat.type]}
        ${isOver ? "scale-110 border-blue-400 bg-blue-200" : ""}
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
        // 캐릭터가 배치된 상태
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-xl">{character.emoji}</span>
          <span className="text-xs text-slate-500 font-medium leading-none">
            {character.name}
          </span>
        </div>
      ) : (
        // 빈자리
        <span className="text-lg opacity-40">
          {seat.type === "window" ? "🪟" : "💺"}
        </span>
      )}
    </div>
  );
}
