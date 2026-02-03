import "../styles/PersonalInfo.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PersonalInfo() {
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");

  const handleSave = async () => {
    if (!age || !weight || !height || !gender || !goal) {
      setError("All fields required");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/api/user/profile",
        {
          age,
          weight,
          height,
          gender,
          goal
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      navigate("/account");

    } catch (err) {
      setError(err.response?.data?.msg || "Failed to save info");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Personal Information</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <div className="options">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        <div className="options">
          <label>
            <input
              type="radio"
              name="goal"
              value="Lose"
              onChange={(e) => setGoal(e.target.value)}
            />
            Lose
          </label>

          <label>
            <input
              type="radio"
              name="goal"
              value="Maintain"
              onChange={(e) => setGoal(e.target.value)}
            />
            Maintain
          </label>

          <label>
            <input
              type="radio"
              name="goal"
              value="Gain"
              onChange={(e) => setGoal(e.target.value)}
            />
            Gain
          </label>
        </div>

        <button onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
