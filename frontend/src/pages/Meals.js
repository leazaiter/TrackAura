import "../styles/Meals.css";
import { useNavigate } from "react-router-dom";
import breakfastImg from "../images/breakfast.jpeg";
import lunchImg from "../images/lunch.jpeg";
import dinnerImg from "../images/dinner.jpeg";
import snackImg from "../images/snack.jpeg";

function Meals() {
  const navigate = useNavigate();

  return (
    <div className="meals-container">

      <h2 className="meals-title">Meals</h2>

      <div className="meals-grid">

        <div className="meal-card" onClick={() => navigate("/meals/breakfast")}>
          <img src={breakfastImg} />
          <h3>Breakfast</h3>
        </div>

        <div className="meal-card" onClick={() => navigate("/meals/lunch")}>
          <img src={lunchImg} />
          <h3>Lunch</h3>
        </div>

        <div className="meal-card" onClick={() => navigate("/meals/dinner")}>
          <img src={dinnerImg} />
          <h3>Dinner</h3>
        </div>

        <div className="meal-card" onClick={() => navigate("/meals/snack")}>
          <img src={snackImg} />
          <h3>Snack</h3>
        </div>

      </div>
      <p className="quote">Don't eat less. Eat right.</p>
    </div>
  );
}

export default Meals;
