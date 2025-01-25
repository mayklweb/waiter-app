import React from "react";
import Header from "../../components/Header";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../utils/routes";

function AppLayout() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
}

export default AppLayout;
