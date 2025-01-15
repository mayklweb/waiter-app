import React from "react";

function ProductCard({ image, name, price }) {
  return (
    <div className="p">
      <div className="p-img">
        <img src={image} alt="" />
      </div>
      <div className="p-t">
        <p className="p-n">
          <span>{name}</span>
        </p>
        <p className="p-p">
          <span>{price} so'm</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
