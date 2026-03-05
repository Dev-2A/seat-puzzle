import DroppableSeat from "./DroppableSeat";

export default function SeatGrid({ seats, cols, seatMap, onRemove }) {
  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: `repeat(${cols}, 4rem)` }}
    >
      {seats.map((seat) => (
        <DroppableSeat
          key={seat.id}
          seat={seat}
          character={seatMap[seat.id] ?? null}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
