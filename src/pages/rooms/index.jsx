import React from "react";
import { Link } from "react-router-dom";
import { getRooms } from "../../api/apiServices";
import { useQuery } from "react-query";

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
  return (
    <section className="rooms">
      <div className="container">
        <Link to={"/"}>home</Link>
        <div className="room-row">
          {rooms?.map((room, i) => (
            <Link to={`/rooms/${room.name}/table`} className="room">
              {room.name}
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Rooms;
