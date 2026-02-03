import "../styles/Breakfast.css";
import { useNavigate } from "react-router-dom";
import datesimg from "../images/dates.jpeg";
import ballsimg from "../images/balls.jpeg";
import chiaseedsimg from "../images/chiaseeds.jpeg";

function Breakfast() {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <h2 className="category-title">Breakfast</h2>
      <div className="meal-row">
        <img src={datesimg} alt="Dates" />
        <div className="meal-info">
          <h3>Dates with peanut butter - Lose</h3>
          <button
            onClick={() =>
              navigate("/snackdetails1", {
                state: {
                  meal: {
                    _id: "697653062a4490c61052ef20",
                    name: "dates & pb",
                    calories: 160,
                    protein: 5,
                    carbs: 22,
                    fat: 8,
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
        <img src={ballsimg} alt="chocolate oats balls" />
        <div className="meal-info">
          <h3>Chocolate Oat Balls - Maintain</h3>
          <button
            onClick={() =>
              navigate("/snackdetails2", {
                state: {
                  meal: {
                    _id: "69764aff2a4490c61052ef0b",
                    name: "chocolate oat balls",
                    calories: 200,
                    protein: 6,
                    carbs: 28,
                    fat: 6,
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
        <img src={chiaseedsimg} alt="chia seeds" />
        <div className="meal-info">
          <h3>Chia cup - Gain</h3>
          <button
            onClick={() =>
              navigate("/snackdetails3", {
                state: {
                  meal: {
                    _id: "6976529f2a4490c61052ef1e",
                    name: "chia cup",
                    calories: 760,
                    protein: 20,
                    carbs: 43,
                    fat: 63,
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