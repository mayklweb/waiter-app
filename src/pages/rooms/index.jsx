import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getRooms } from "../../api/apiServices";

function Rooms() {
  const {
    data: rooms,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Rooms"],
    queryFn: getRooms,
  });

  if (isLoading) {
    return <div>Loading rooms...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!rooms?.length) {
    return <div>No rooms available</div>;
  }

  return (
    <section className="rooms">
      <div className="container">
        <Link to="/">Home</Link>
        <div className="room-row">
          {rooms.map((room) => (
            <Link
              key={room.id}
              to={`/room/${room.id}/table`}
              className="room"
            >
              {room.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
