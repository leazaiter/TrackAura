import "../styles/Homehero.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const x = useNavigate();
  return (
    <div className="home-container">
      <div className="center-content">
        <h1>TrackAura</h1>
        <p>Track your meals , steps and progress - all in one place</p>
      <div className="home-buttons">
        <button  onClick={()=>x("/login")} className="login-btn">Login</button>
        <button  onClick={()=>x("/register")} className="register-btn">Register</button>
      </div>
      </div>
    </div>
  );
}

export default Home;