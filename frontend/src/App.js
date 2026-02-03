import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PersonalInfo from "./pages/PersonalInfo";
import Account from "./pages/Account";
import Dashboard, { CaloriesContext } from "./pages/Dashboard"; 
import Breakfast from "./pages/Breakfast";
import BreakfastDetails1 from "./pages/BreakfastDetails1";
import BreakfastDetails2 from "./pages/BreakfastDetails2";
import BreakfastDetails3 from "./pages/BreakfastDetails3";
import Lunch from "./pages/Lunch";
import LunchDetails1 from "./pages/LunchDetails1";
import LunchDetails2 from "./pages/LunchDetails2";
import LunchDetails3 from "./pages/LunchDetails3";
import Dinner from "./pages/Dinner.js";
import DinnerDetails1 from "./pages/DinnerDetails1.js";
import DinnerDetails2 from "./pages/DinnerDetails2.js";
import DinnerDetails3 from "./pages/DinnerDetails3.js";
import Snack from "./pages/Snack.js";
import SnackDetails1 from "./pages/SnackDetails1.js";
import SnackDetails2 from "./pages/SnackDetails2.js";
import SnackDetails3 from "./pages/SnackDetails3.js";
import Workouts from "./pages/Workout.js";
import WorkoutDetails from "./pages/WorkoutDetails.js";
import Settings from "./pages/Settings.js";

function App() {
 const [caloriesConsumed, setCaloriesConsumed] = useState(() => {
  return Number(localStorage.getItem("caloriesConsumed")) || 0;
});
const [caloriesBurned, setCaloriesBurned] = useState(() => {
  return Number(localStorage.getItem("caloriesBurned")) || 0;
});
const [steps, setSteps] = useState(() => {
  return Number(localStorage.getItem("steps")) || 0;
});

const [water, setWater] = useState(() => {
  return Number(localStorage.getItem("water")) || 0;
});

useEffect(() => {
    localStorage.setItem("caloriesConsumed", caloriesConsumed);
    localStorage.setItem("caloriesBurned", caloriesBurned);
    localStorage.setItem("steps", steps);
    localStorage.setItem("water", water);
  }, [caloriesConsumed, caloriesBurned, steps, water]);
  useEffect(() => {
    document.title = "TrackAura";
  }, []);

  return (
    <CaloriesContext.Provider
      value={{
        caloriesConsumed,
        setCaloriesConsumed,
        caloriesBurned,
        setCaloriesBurned,
        steps,
        setSteps,
        water,
        setWater,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meals/breakfast" element={<Breakfast />} />
        <Route path="/breakfastdetails1" element={<BreakfastDetails1 />} />
        <Route path="/breakfastdetails2" element={<BreakfastDetails2 />} />
        <Route path="/breakfastdetails3" element={<BreakfastDetails3 />} />
        <Route path="/meals/lunch" element={<Lunch />} />
        <Route path="/lunchdetails1" element={<LunchDetails1 />} />
        <Route path="/lunchdetails2" element={<LunchDetails2 />} />
        <Route path="/lunchdetails3" element={<LunchDetails3 />} />
        <Route path="/meals/dinner" element={<Dinner />} />
        <Route path="/dinnerdetails1" element={<DinnerDetails1 />} />
        <Route path="/dinnerdetails2" element={<DinnerDetails2 />} />
        <Route path="/dinnerdetails3" element={<DinnerDetails3 />} />
        <Route path="/meals/snack" element={<Snack />} />
        <Route path="/snackdetails1" element={<SnackDetails1 />} />
        <Route path="/snackdetails2" element={<SnackDetails2 />} />
        <Route path="/snackdetails3" element={<SnackDetails3 />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:type" element={<WorkoutDetails />} />
        <Route path="/settings" element={<Settings/>}/>;
      </Routes>
    </CaloriesContext.Provider>
  );
}

export default App;