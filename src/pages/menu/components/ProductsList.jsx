import React from "react";
import ProductCard from "./ProductCard";
import { data } from "../../../utils";

function ProductsList() {
    return (
        <div className="pl">
            <div className="container">
                <div className="pl-r">
                  {
                    data.map(({name, price, image, id}) => (
                      <ProductCard key={id} name={name} price={price} image={image} />
                    ))
                  }
                </div>
            </div>
        </div>
    );
}

export default ProductsList;
