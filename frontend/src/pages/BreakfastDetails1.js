import "../styles/BreakfastDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import { useLocation } from "react-router-dom";
import egg from "../images/eggs.jpeg";

function BreakfastDetails1() {
  const { setCaloriesConsumed } = useContext(CaloriesContext);
  const { state } = useLocation();
  const meal = state?.meal;
  if (!meal) {
    return <p>No meal data provided.</p>;
  }
  const addCalories = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/meals/log",
        { mealId: meal._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCaloriesConsumed(prev => prev + meal.calories);
      alert("Meal added!");
    } catch (err) {
      console.log(err);
      alert("Error adding meal");
    }
  };

  return (
    <div className="details-container">
      <img className="details-img" src={egg} alt={meal.name} />
      <h2>{meal.name}</h2>
      <p><b>Ingredients:</b>2 eggs, 1 mushroom (~50g), 1 cup raw spinach (~30g)</p>
      <p><b>Recipe:</b>Add the spinach to a pan with no oil. When it wilts, add sliced mushrooms. Whisk 2 eggs with a small spoon of salt, add to pan, cook 3 min.</p>
      <div className="macros">
        <p>Calories: {meal.calories} Kcal</p>
        <p>Protein: {meal.protein}g</p>
        <p>Carbs: {meal.carbs}g</p>
        <p>Fat: {meal.fat}g</p>
      </div>
      <button className="eat-btn" onClick={addCalories}> Mark As Eaten </button>
    </div>
  );
}

export default BreakfastDetails1;