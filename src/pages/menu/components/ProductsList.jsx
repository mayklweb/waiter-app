import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "react-query";
// import ProductsLoading from "./ProductsLoading";
import Filter from "./Filter";
import { getProducts } from "../../../api/apiServices";

function ProductsList() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {
    data: products,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  const filterProductsByCategory = (categoryId) => {
    if (!products) return;
    if (!categoryId) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.id === categoryId
      );
      setFilteredProducts(filtered);
    }
  };

  if (isLoading) return 'Loading...';

  if (isError) {
    console.error(error?.message);
    return <div>Error loading products.</div>;
  }

  return (
    <div className="pl">
      <Filter onFilter={filterProductsByCategory} />
      <div className="container">
        <div className="pl-r">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
