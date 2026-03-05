import DroppableSeat from "./DroppableSeat";

export default function SeatGrid({
  seats,
  cols,
  seatMap,
  satisfactionMap,
  onRemove,
}) {
  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: `repeat(${cols}, 4rem)` }}
    >
      {seats.map((seat) => {
        const character = seatMap[seat.id] ?? null;
        const satisfactionResults = character
          ? (satisfactionMap[character.id] ?? null)
          : null;

        return (
          <DroppableSeat
            key={seat.id}
            seat={seat}
            character={character}
            satisfactionResults={satisfactionResults}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}
