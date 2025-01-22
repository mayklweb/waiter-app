import React from "react";
import Filter from "./components/Filter";
import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";
import { Link, useParams } from "react-router-dom";

function Menu() {
  const location = useParams()
  console.log(location);
  return (
    <section className="menu">
      <div className="container">
        <Link to={"/"}>Asosy</Link> / <Link to={"/room"}> VIP kabina </Link> / <Link to={'/room/1/table'}> 1-Кабина </Link> / Menu
      </div>
      <ProductsList />
      <Footer />
    </section>
  );
}

export default Menu;
