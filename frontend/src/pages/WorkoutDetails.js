import "../styles/WorkoutDetails.css";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import axios from "axios";
import burpeesGif from "../images/Burpees.gif";
import mountainGif from "../images/mountainclimbers.gif";
import jumpingGif from "../images/JumpingJack.gif";
import pushupsGif from "../images/pushups.gif";
import armGif from "../images/armcircles.gif";
import shoulderGif from "../images/DumbellShoulder.gif";
import squatsGif from "../images/Squat.gif";
import lungesGif from "../images/Lunges.gif";
import gluteGif from "../images/GluteBridge.gif";

function WorkoutDetails() {
  const { type } = useParams();
  const { setCaloriesBurned } = useContext(CaloriesContext);
  const [localBurned, setLocalBurned] = useState(0);

  const exerciseData = {
    fullbody: [
      { name: "Burpees", duration: 15, calories: 180, gif: burpeesGif },
      { name: "Mountain Climbers", duration: 15, calories: 160, gif: mountainGif },
      { name: "Jumping Jacks", duration: 15, calories: 120, gif: jumpingGif },
    ],
    upperbody: [
      { name: "Push Ups", duration: 15, calories: 120, gif: pushupsGif },
      { name: "Arm Circles + Shadow Boxing", duration: 15, calories: 100, gif: armGif },
      { name: "Dumbbell Shoulder Press", duration: 15, calories: 110, gif: shoulderGif },
    ],
    lowerbody: [
      { name: "Squats", duration: 15, calories: 130, gif: squatsGif },
      { name: "Lunges", duration: 15, calories: 120, gif: lungesGif },
      { name: "Glute Bridges", duration: 15, calories: 100, gif: gluteGif },
    ],
  };

  const handleComplete = async (exercise) => {
  setLocalBurned((prev) => prev + exercise.calories);
  setCaloriesBurned((prev) => prev + exercise.calories);

  try {
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5000/api/workouts",
      {
        exerciseName: exercise.name,
        duration: exercise.duration,
        caloriesBurned: exercise.calories,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (err) {
    console.log(err);
  }

  alert(`${exercise.name} completed! + ${exercise.calories} kcal burned`);
};

  return (
    <div className="workout-details-container">
      <h2>{type.toUpperCase()} Exercises</h2>
      <div className="exercise-grid">
        {exerciseData[type].map((exercise, idx) => (
          <div key={idx} className="exercise-card">
            <img src={exercise.gif} alt={exercise.name} className="exercise-gif" />
            <h3>{exercise.name}</h3>
            <p>5 min | 30s break | Replay 3 times</p>
            <button className="complete-btn" onClick={() => handleComplete(exercise)}>
              Completed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutDetails;