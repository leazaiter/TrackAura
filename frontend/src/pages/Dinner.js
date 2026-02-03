import "../styles/Breakfast.css";
import { useNavigate } from "react-router-dom";
import bitofeverythingimg from "../images/bitofeverything.jpeg";
import salmonbakedimg from "../images/salmonbaked.jpeg";
import burgerbowlimg from "../images/burgerbowl.jpeg";

function Breakfast() {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <h2 className="category-title">Dinner</h2>
      <div className="meal-row">
        <img src={bitofeverythingimg} alt="Bit of Everything" />
        <div className="meal-info">
          <h3>Bit of Everything - Lose</h3>
          <button
            onClick={() =>
              navigate("/dinnerdetails1", {
                state: {
                  meal: {
                    _id: "697650812a4490c61052ef15",
                    name: "Bit of Everything",
                    calories: 700,
                    protein: 37,
                    carbs: 48,
                    fat: 50,
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
        <img src={salmonbakedimg} alt="Salmon Baked" />
        <div className="meal-info">
          <h3>Baked Salmon - Maintain</h3>
          <button
            onClick={() =>
              navigate("/dinnerdetails2", {
                state: {
                  meal: {
                    _id: "697651db2a4490c61052ef1c",
                    name: "salmon bowl",
                    calories: 400,
                    protein: 30,
                    carbs: 40,
                    fat: 25,
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
        <img src={burgerbowlimg} alt="Burger Bowl" />
        <div className="meal-info">
          <h3>Burger Bowl - Gain</h3>
          <button
            onClick={() =>
              navigate("/dinnerdetails3", {
                state: {
                  meal: {
                    _id: "697650812a4490c61052ef15",
                    name: "Burger Bowl",
                    calories: 700,
                    protein: 37,
                    carbs: 48,
                    fat: 50,
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