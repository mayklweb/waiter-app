import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getTable } from "../../api/apiServices";

function Table() {
  const {
    data: tables,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getTable,
  });

  return (
    <div className="tables">
      <div className="container">
        <Link to={"/"}>home</Link>/ <Link to={"/rooms"}>ROOM </Link>
        <div className="table-row">
          {tables.map((table, i) => (
            <Link key={i} to={`/rooms/vip-room/table/${table.id}`} className="table">
              <div class="circle top-left"></div>
              <div class="circle top-right"></div>
              <div class="circle bottom-left"></div>
              <div class="circle bottom-right"></div>
              <div class="box">{table.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
