import React from "react";
import Filter from "./components/Filter";
import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <Link to={"/"}>home</Link> / <Link to={"/rooms"}> ROOM </Link> <Link to={'/rooms/1/table'}></Link>
      </div>
      <ProductsList />
      <Footer />
    </div>
  );
}

export default Menu;
