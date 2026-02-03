import "../styles/BreakfastDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import { useLocation } from "react-router-dom";
import steak from "../images/steak.jpeg";

function LunchDetails2() {
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
      <img className="details-img" src={steak} alt={meal.name} />
      <h2>{meal.name}</h2>
      <p><b>Ingredients:</b>Steak~150g, Potato wedges(oven-baked)~150g,1 cup asparagus~100g, 1 tbsp of olive oil~5g</p>
      <p><b>Recipe:</b>Season the steak with salt and pepper and grill it in a hot pan with a little olive oil for 3–4 minutes per side until cooked to your liking. Roast the potato wedges in the oven at 200°C (400°F) for about 25 minutes and serve them with sautéed zucchini, green beans, or asparagus on the side.</p>
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

export default LunchDetails2;