import "../styles/BreakfastDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import { useLocation } from "react-router-dom";
import chiaseeds from "../images/chiaseeds.jpeg";

function SnackDetails3() {
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
      <img className="details-img" src={chiaseeds} alt={meal.name} />
      <h2>{meal.name}</h2>
      <p><b>Ingredients:</b>•	Coconut yogurt: 1 cup ~ 240 g
	•	Chia seeds: 1 tbsp ~ 12 g
	•	Almond milk: ½ cup ~ 120 ml
	•	Apple: ½ medium ~ 75 g
	•	Raspberries: ½ cup ~ 60 g
	•	Walnuts: 8 halves ~ 15 g
	•	Coconut flakes: 1 tbsp ~ 5 g
	•	Cocoa nibs: 1 tsp ~ 5 g
	•	Peanut butter: 1 tbsp ~ 16 g</p>
      <p><b>Recipe:</b>Mix the coconut yogurt, chia seeds, and almond milk in a bowl until smooth, then gently fold in the chopped apple, raspberries, walnuts, coconut flakes, and cocoa nibs. Finish by swirling in the peanut butter on top and enjoy it chilled as a creamy, energy-boosting snack.</p>
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

export default SnackDetails3;