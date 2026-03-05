import { useDraggable } from "@dnd-kit/core";
import CharacterCard from "./CharacterCard";

export default function DraggableCharacter({
  character,
  characters,
  isPlaced,
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: character.id,
      data: { character },
    });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)`, zIndex: 50 }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`transition-transform ${isDragging ? "scale-110 opacity-90" : ""}`}
    >
      <CharacterCard
        character={character}
        characters={characters}
        isPlaced={isPlaced}
      />
    </div>
  );
}
