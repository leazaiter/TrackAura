import "../styles/BreakfastDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import { useLocation } from "react-router-dom";
import salmon from "../images/salmonwithvegetables.jpeg";

function LunchDetails1() {
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
      <img className="details-img" src={salmon} alt={meal.name} />
      <h2>{meal.name}</h2>
      <p><b>Ingredients:</b>salmon ~100g, 1/2 cup rice~75g, 1 cup broccoli~90g, 1/4 cup beans~45g, 1/2 avocado medium~75g, 1/2 carrot medium~60g, 1 medium cucumber~100g, 1tbsp of olive oil~5g</p>
      <p><b>Recipe:</b>Season the salmon with salt, pepper, and a little olive oil, then bake it at 200°C (400°F) for 12–15 minutes until flaky. Serve it over cooked rice with broccoli, beans, carrot, cucumber, and sliced avocado on the side.</p>
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

export default LunchDetails1;