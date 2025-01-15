import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Header from "./components/Header";

function App() {

  return (
    <>
    <Header/>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
