import "../styles/Workout.css";
import { useNavigate } from "react-router-dom";
import fullBodyImg from "../images/fullbody.jpeg";
import upperBodyImg from "../images/upperbody.jpeg";
import lowerBodyImg from "../images/lowerbody.jpeg";

function Workout() {
  const navigate = useNavigate();

  return (
    <div className="workouts-container">
      <h2 className="workouts-title">Choose Workout</h2>
      <div className="workout-grid">
        <div className="workout-card left" onClick={() => navigate("/workouts/fullbody")}>
          <img src={fullBodyImg} alt="Full Body Workout" className="workout-img" />
          <h3>Full Body</h3>
        </div>
        <div className="workout-card right-up" onClick={() => navigate("/workouts/upperbody")}>
          <img src={upperBodyImg} alt="Upper Body Workout" className="workout-img" />
          <h3>Upper Body</h3>
        </div>
        <div className="workout-card right-down" onClick={() => navigate("/workouts/lowerbody")}>
          <img src={lowerBodyImg} alt="Lower Body Workout" className="workout-img" />
          <h3>Lower Body</h3>
        </div>
      </div>
      <div className="quote">
        <h4>Small changes each day lead to big results tomorrow.</h4>
      </div>
    </div>
  );
}

export default Workout;