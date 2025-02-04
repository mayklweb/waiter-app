import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getTable } from "../../api/apiServices";

function Table() {
  const location = useParams();
  const roomId = +location.roomId;
  const userStatusJSON = localStorage.getItem("user-status");
  const userStatus = JSON.parse(userStatusJSON)


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
    (table) => table.category.id === roomId
  );

  return (
    <section className="tables">
      <div className="container">
        <Link to={"/room"}>Asosy</Link> / <Link to={"/room"}> Room </Link> /
        Table
        <div className="table-row">
          {tablesByCategory?.map((table, i) => (
            <Link
              key={i}
              to={`/room/${table.category.id}/table/${table.number}/${
                userStatus === "cashier" ? "checkout" : "menu"
              }`}
              className="table"
            >
              <div className="circle top-left"></div>
              <div className="circle top-right"></div>
              <div className="circle bottom-left"></div>
              <div className="circle bottom-right"></div>
              <div className={`box ${table.basy ? "busy" : ""}`}>
                {table.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Table;
