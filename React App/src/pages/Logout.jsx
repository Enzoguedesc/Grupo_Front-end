import { signOut } from "firebase/auth"
import { auth } from "../config/Firebase";
import Base from "./Base";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (e) =>{
    e.preventDefault();
    signOut(auth);
    window.sessionStorage.removeItem("accessToken");
    navigate("/");
  }

  return (
    <Base>
    <div className="container-logout">
        <h1 className="logout-h1">Logout</h1>
        <h4 className="logout-h4">Tem  certeza que deseja fazer Logout?</h4>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
    </Base>
  )
}


export default Logout;