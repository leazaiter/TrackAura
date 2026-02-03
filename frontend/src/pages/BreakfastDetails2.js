import "../styles/BreakfastDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import { useLocation } from "react-router-dom";
import oats from "../images/oats.jpeg";

function BreakfastDetails2() {
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
      <img className="details-img" src={oats} alt={meal.name}/>
      <h2>{meal.name}</h2>
      <p><b>Ingredients:</b>1/2 cup oats~40g, 1 cup milk~250ml(low fat), 1/4 cup granola~30g, 1/2 cup blueberries~75g, 1 tablespoon of peanut butter~16g</p>
      <p><b>Recipe:</b>Cooked the oats with milk, then add the granola, blueberries and the pb </p>
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

export default BreakfastDetails2;
