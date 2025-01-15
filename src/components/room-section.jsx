
export default function RoomSelection({ rooms, onSelect }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Select a Room:</h2>
      {rooms.map((room) => (
        <button
          key={room}
          onClick={() => onSelect(room)}
          className="w-full text-lg py-3"
        >
          {room}
        </button>
      ))}
    </div>
  );
}
