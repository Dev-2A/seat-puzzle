function Seat({ seat }) {
  const typeStyle = {
    window: "border-blue-300 bg-blue-100",
    aisle: "border-slate-300 bg-slate-100",
    normal: "border-slate-300 bg-slate-100",
  };

  return (
    <div
      className={`
        w-16 h-16 rounded-xl border-2 flex items-center justify-center
        text-xs text-slate-400 font-medium
        ${typeStyle[seat.type]}
      `}
    >
      {seat.type === "window" ? "🪟" : "💺"}
    </div>
  );
}

export default function SeatGrid({ seats, cols }) {
  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: `repeat(${cols}, 4rem)` }}
    >
      {seats.map((seat) => (
        <Seat key={seat.id} seat={seat} />
      ))}
    </div>
  );
}
