import "../styles/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setError("All fields required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
    "http://localhost:5000/api/auth/register",
    { name, email, password },
    {
    headers: {
      "Content-Type": "application/json"
    }
  }
  );

      localStorage.removeItem("caloriesConsumed");
      localStorage.removeItem("caloriesBurned");
      localStorage.removeItem("steps");
      localStorage.removeItem("water");
      localStorage.setItem("token", res.data.token);
      navigate("/personal-info");
      window.location.reload(); 

    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="primary-btn" onClick={handleRegister}>
          Register
        </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Register;
