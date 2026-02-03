import "../styles/Breakfast.css";
import { useNavigate } from "react-router-dom";
import eggimg from "../images/eggs.jpeg";
import oatsimg from "../images/oats.jpeg";
import salmonimg from "../images/salmontoasts.jpeg";

function Breakfast() {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <h2 className="category-title">Breakfast</h2>
      <div className="meal-row">
        <img src={eggimg} alt="Egg Mushroom" />
        <div className="meal-info">
          <h3>Egg Mushroom - Lose</h3>
          <button
            onClick={() =>
              navigate("/breakfastdetails1", {
                state: {
                  meal: {
                    _id: "69728165463359018d45b422",
                    name: "Egg Mushroom",
                    calories: 185,
                    protein: 14,
                    carbs: 4,
                    fat: 13,
                  }
                }
              })
            }
          >
            View Details
          </button>
        </div>
      </div>
      <div className="meal-row">
        <img src={oatsimg} alt="Oats Bowl" />
        <div className="meal-info">
          <h3>Oats Bowl - Maintain</h3>
          <button
            onClick={() =>
              navigate("/breakfastdetails2", {
                state: {
                  meal: {
                    _id: "69764aff2a4490c61052ef0b",
                    name: "Oats Bowl",
                    calories: 400,
                    protein: 20,
                    carbs: 70,
                    fat: 2,
                  }
                }
              })
            }
          >
            View Details
          </button>
        </div>
      </div>
      <div className="meal-row">
        <img src={salmonimg} alt="Salmon Toasts" />
        <div className="meal-info">
          <h3>Salmon Toasts - Gain</h3>
          <button
            onClick={() =>
              navigate("/breakfastdetails3", {
                state: {
                  meal: {
                    _id: "69764e242a4490c61052ef0f",
                    name: "Salmon Toasts",
                    calories: 620,
                    protein: 39,
                    carbs: 52,
                    fat: 7,
                  }
                }
              })
            }
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Breakfast;