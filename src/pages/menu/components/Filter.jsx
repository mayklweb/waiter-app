import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getCategories } from "../../../api/apiServices";

function Filter({ onFilter }) {
  const [activeCategory, setActiveCategory] = useState("");

  const { data: categories, isError, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const handleFilterByCategory = (categoryId) => {
    setActiveCategory(categoryId);
    onFilter(categoryId); 
  };

  if (isLoading) return "Loading..."

  if (isError) {
    console.error(error?.message);
    return <div>Error loading categories.</div>;
  }

  return (
    <div className="c">
      <div className="container">
        <div className="c-r">
          
        <div
          onClick={() => handleFilterByCategory("")}
          className={`c-btn ${!activeCategory && "active"}`}
        >
          Все
        </div>
        {categories?.map(({ name, id }) => (
          <div
            key={id}
            onClick={() => handleFilterByCategory(id)}
            className={`c-btn ${activeCategory === id && "active"}`}
          >
            {name}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
