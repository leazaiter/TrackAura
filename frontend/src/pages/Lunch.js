import "../styles/Breakfast.css";
import { useNavigate } from "react-router-dom";
import salmonwithvegetablesimg from "../images/salmonwithvegetables.jpeg";
import steakimg from "../images/steak.jpeg";
import greekshawarmaimg from "../images/greekshawarma.jpeg";

function Lunch() {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <h2 className="category-title">Lunch</h2>
      <div className="meal-row">
        <img src={salmonwithvegetablesimg} alt="Salmon with vegetables" />
        <div className="meal-info">
          <h3>Baked salmon with vegetables - Lose</h3>
          <button
            onClick={() =>
              navigate("/lunchdetails1", {
                state: {
                  meal: {
                    _id: "69764e242a4490c61052ef0f",
                    name: "baked salmon with vegetables",
                    calories: 580,
                    protein: 32,
                    carbs: 53,
                    fat: 27,
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
        <img src={steakimg} alt="Steak & frites" />
        <div className="meal-info">
          <h3>Steak & Frites - Maintain</h3>
          <button
            onClick={() =>
              navigate("/lunchdetails2", {
                state: {
                  meal: {
                    _id: "69764fc02a4490c61052ef13",
                    name: "steak & frites",
                    calories: 600,
                    protein: 36,
                    carbs: 40,
                    fat: 30,
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
        <img src={greekshawarmaimg} alt="Greek Shawarma" />
        <div className="meal-info">
          <h3>Greek Shawarma - Gain</h3>
          <button
            onClick={() =>
              navigate("/lunchdetails3", {
                state: {
                  meal: {
                    _id: "69764f322a4490c61052ef11",
                    name: "greek shawarma",
                    calories: 1610,
                    protein: 60,
                    carbs: 167,
                    fat: 76,
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

export default Lunch;