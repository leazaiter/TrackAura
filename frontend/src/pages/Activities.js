import "../styles/Activities.css";
import { useState, useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import axios from "axios";
import walking from "../images/walking.jpeg";
import running from "../images/running.jpeg";
import cycling from "../images/cycling.jpeg";

function Activities() {
  const { setCaloriesBurned, setSteps } = useContext(CaloriesContext);

  const [walkingTime, setWalkingTime] = useState(0);
  const [runningTime, setRunningTime] = useState(0);
  const [cyclingTime, setCyclingTime] = useState(0);

  const CALORIES_PER_MIN = {
    walking: 4,
    running: 10,
    cycling: 8,
  };

  const STEPS_PER_MIN = {
    walking: 100,
    running: 160,
  };

  const handleSubmit = async (activity, time) => {
    if (!time || time <= 0) {
      alert("Please enter a valid time in minutes.");
      return;
    }

    const normalizedActivity = activity.toLowerCase(); 
    const calories = time * CALORIES_PER_MIN[normalizedActivity];
    setCaloriesBurned((prev) => prev + calories);

    if (normalizedActivity === "walking" || normalizedActivity === "running") {
      const stepsAdded = time * STEPS_PER_MIN[normalizedActivity];
      setSteps((prev) => prev + stepsAdded);
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/workouts",
        {
          exerciseName: normalizedActivity, 
          duration: time,
          caloriesBurned: calories,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.log(err);
    }

    alert(`${normalizedActivity} logged! +${calories} kcal burned`);
  };

  return (
    <div className="activities-container">
      <h2 className="activities-title">Log Your Activities</h2>

      <div className="activities-grid">
        <div className="activity-card green">
          <h3>🚶 Walking</h3>
          <img src={walking} alt="Walking" className="activity-img" />
          <input
            type="number"
            className="activity-input"
            placeholder="Minutes"
            value={walkingTime}
            onChange={(e) => setWalkingTime(Number(e.target.value))}
          />
          <button
            className="activity-button"
            onClick={() => handleSubmit("walking", walkingTime)}
          >
            Add Walking
          </button>
        </div>

        <div className="activity-card olive">
          <h3>🏃 Running</h3>
          <img src={running} alt="Running" className="activity-img" />
          <input
            type="number"
            className="activity-input"
            placeholder="Minutes"
            value={runningTime}
            onChange={(e) => setRunningTime(Number(e.target.value))}
          />
          <button
            className="activity-button"
            onClick={() => handleSubmit("running", runningTime)}
          >
            Add Running
          </button>
        </div>

        <div className="activity-card mint">
          <h3>🚴 Cycling</h3>
          <img src={cycling} alt="Cycling" className="activity-img" />
          <input
            type="number"
            className="activity-input"
            placeholder="Minutes"
            value={cyclingTime}
            onChange={(e) => setCyclingTime(Number(e.target.value))}
          />
          <button
            className="activity-button"
            onClick={() => handleSubmit("cycling", cyclingTime)}
          >
            Add Cycling
          </button>
        </div>
      </div>
    </div>
  );
}

export default Activities;