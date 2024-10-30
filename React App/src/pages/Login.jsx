import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { auth } from "../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Base from "./Base";
import styled from "styled-components";

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

const Taglogin = styled.form`
  /* Container for the login form */
  .login-container {
    width: 300px;
    margin: 10em auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  /* Style for the form elements */
  .login-container input[type="email"],
  .login-container input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }

  /* Style for the submit button */
  .login-container input[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: var(--destaque);
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

  .login-container input[type="submit"]:hover {
    background-color: var(--detalhe);
  }

  /* Style for the form labels */
  .login-container label {
    margin-bottom: 5px;
    display: block;
    font-weight: bold;
  }

  /* Style for the form title */
  .login-container h2 {
    color: var(--primaria);
    text-align: center;
    margin-bottom: 20px;
  }
`

  return (
    <Base>
      <Taglogin onSubmit={handleLogin}>
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
          <input type="submit" value="Login"/>
          </div>
        </Taglogin>
    </Base>
  )
}

export default Login;