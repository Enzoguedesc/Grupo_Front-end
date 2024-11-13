import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Base from "./Base";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Base>
      <form onSubmit={handleLogin}>
        <div className="login-container">
          <h2>Insira suas credenciais</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input type="submit" placeholder="Login"/>
        </div>
        </form>
    </Base>
  )
}

export default Login;
