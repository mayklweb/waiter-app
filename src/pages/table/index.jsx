import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getTable } from "../../api/apiServices";

function Table() {
  const location = useParams();
  const roomId = +location.roomId;

  const {
    data: allTable,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Table"],
    queryFn: getTable,
  });

  const tablesByCategory = allTable?.filter(
    (table) => table.category === roomId
  );

  return (
    <div className="tables">
      <div className="container">
        <Link to={"/"}>home</Link> / <Link to={"/rooms"}>ROOM </Link>
        <div className="table-row">
          {tablesByCategory?.map((table, i) => (
            <Link
              key={i}
              to={`/room/${table.category}/table/${table.id}/menu`}
              className="table"
            >
              <div className="circle top-left"></div>
              <div className="circle top-right"></div>
              <div className="circle bottom-left"></div>
              <div className="circle bottom-right"></div>
              <div className="box">{table.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
