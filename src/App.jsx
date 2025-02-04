import useIsAuth from "./context/useIsAuth";
import LoginPage from "./pages/login";
import AppLayout from "./pages/appLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const isAuth = useIsAuth();
    if (!isAuth) {
      navigate('/login')
      // return <LoginPage />
    }
  return isAuth ? <AppLayout /> : <LoginPage />;
}

export default App;
