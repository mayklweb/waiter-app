import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Axios } from "../../api/api";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { addToken } = useAuth();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onFinish = (e) => {
    e.preventDefault();
    setLoading(true);
    Axios.post("/login/", { password: password, username: username })
      .then((res) => {
        if (res.data.token) {
          const userStatus = JSON.stringify(res.data.user.status);
          localStorage.setItem("user-status", userStatus);
          console.log(res);
          addToken(res.data.token);
          navigate("/");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <img src="/public/logo.png" alt="" />
        </div>
        {/* <h1 className="login-title">Kirish</h1> */}
        <form onSubmit={onFinish}>
          <div className="input-group">
            <label htmlFor="username">Login</label>
            <input
              id="username"
              type="text"
              placeholder="Login..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Parol</label>
            <input
              id="password"
              type="password"
              placeholder="Parol..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-button" type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
