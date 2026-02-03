import "../styles/Dashboard.css";
import { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CaloriesContext = createContext();

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  const {
    caloriesConsumed,
    setCaloriesConsumed,
    caloriesBurned,
    setCaloriesBurned,
    steps, setSteps,
  water, setWater
  } = useContext(CaloriesContext);

  const STEPS_PER_MIN = {
    walking: 100,
    running: 160,
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/meals/today", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const totalCalories = res.data.reduce(
          (sum, meal) => sum + meal.calories,
          0
        );
        setCaloriesConsumed(totalCalories);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMeals();
  }, [setCaloriesConsumed]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/workouts/today", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Workouts response:", res.data);

        const totalBurned = res.data.reduce(
          (sum, workout) => sum + workout.caloriesBurned,
          0
        );
        setCaloriesBurned(totalBurned);

        const totalSteps = res.data.reduce((sum, workout) => {
          const name = workout.exerciseName?.toLowerCase(); 
          if (name === "walking") {
            return sum + workout.duration * STEPS_PER_MIN.walking;
          }
          if (name === "running") {
            return sum + workout.duration * STEPS_PER_MIN.running;
          }
          return sum;
        }, 0);
        setSteps(totalSteps);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWorkouts();
  }, [setCaloriesBurned]);

  useEffect(() => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const msUntilMidnight = midnight - now;

    const timer = setTimeout(() => {
      setCaloriesConsumed(0);
      setCaloriesBurned(0);
      setSteps(0);
      setWater(0);
      localStorage.setItem("caloriesConsumed", 0);
      localStorage.setItem("caloriesBurned", 0);
      localStorage.setItem("water", 0);
    }, msUntilMidnight);

    return () => clearTimeout(timer);
  }, [setCaloriesConsumed, setCaloriesBurned]);

  const addGlass = () => {
    setWater((prev) => {
      const updated = prev + 250; 
      localStorage.setItem("water", updated);
      return updated;
    });
  };

  const bmi =
    user?.weight && user?.height
      ? user.weight / ((user.height / 100) * (user.height / 100))
      : 0;

  const getCalorieGoal = () => {
    if (!user?.weight) return 0;
    const maintenance = user.weight * 30;
    if (user.goal === "Lose") return Math.round(maintenance - 500);
    if (user.goal === "Maintain") return Math.round(maintenance);
    if (user.goal === "Gain") return Math.round(maintenance + 500);
    return Math.round(maintenance);
  };

  const calorieGoal = getCalorieGoal();

  const getCaloriesBurnedTarget = () => {
    if (!user?.weight || !user?.height || !user?.age || !user?.gender)
      return 400;

    const s = user.gender === "Male" ? 5 : -161;
    const bmr = 10 * user.weight + 6.25 * user.height - 5 * user.age + s;

    if (user.goal === "Lose") return Math.round(bmr * 0.2);
    if (user.goal === "Maintain") return Math.round(bmr * 0.1);
    if (user.goal === "Gain") return Math.round(bmr * 0.05);

    return 400;
  };

  const caloriesBurnedTarget = getCaloriesBurnedTarget();

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Today's Overview</h2>

      {user && (
        <p className="bmi-text">
          Your BMI: {bmi.toFixed(1)} | Goal: {user.goal}
        </p>
      )}

      <div className="stats-grid">
        <div className="stat-card green">
          <h3>Calories Consumed</h3>
          <p>
            {caloriesConsumed} / {calorieGoal} kcal
          </p>
        </div>

        <div className="stat-card olive">
          <h3>Calories Burned</h3>
          <p>
            {caloriesBurned} / {caloriesBurnedTarget} kcal
          </p>
        </div>

        <div className="stat-card mint">
          <h3>Steps</h3>
          <p>{steps}</p>
        </div>

        <div className="stat-card light">
          <h3>Water Intake</h3>
          <p>{water} ml</p>
          <button onClick={addGlass}>+ Add Glass (250ml)</button>
        </div>
      </div>

      <button
        className="settings-button"
        onClick={() => navigate("/settings")}
      >
        ⚙️ Update Settings
      </button>
    </div>
  );
}

export default Dashboard;