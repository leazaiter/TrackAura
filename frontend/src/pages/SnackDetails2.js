import "../styles/BreakfastDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import { useLocation } from "react-router-dom";
import balls from "../images/balls.jpeg";

function SnackDetails2() {
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
      <img className="details-img" src={balls} alt={meal.name} />
      <h2>{meal.name}</h2>
      <p><b>Ingredients:</b>¼ cup rolled oats (20 g), 1 tbsp peanut butter (16 g), 1 tbsp honey (21 g), 1 tbsp cocoa powder (5 g), and 1–2 tbsp almond milk</p>
      <p><b>Recipe:</b>Mix all the ingredients in a bowl until you get a thick dough. Roll into 4 balls and refrigerate for 15–20 minutes before eating.</p>
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

export default SnackDetails2;