import useIsAuth from "./context/useIsAuth";
import LoginPage from "./pages/login";
import AppLayout from "./pages/appLayout";

function App() {
  const isAuth = useIsAuth();
  return isAuth ? <AppLayout /> : <LoginPage />;
}

export default App;
