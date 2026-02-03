import "../styles/BreakfastDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import { useLocation } from "react-router-dom";
import burgerbowl from "../images/burgerbowl.jpeg";

function DinnerDetails3() {
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
      <img className="details-img" src={burgerbowl} alt={meal.name} />
      <h2>{meal.name}</h2>
      <p><b>Ingredients:</b>mini beef patties~150g, potato wedges~150g, 1/2 medium avocado~75g, 1/2 cup tomatoes~80g, 1 cup lettuce~50g, 2 tbsp of burger sauce~30g</p>
      <p><b>Recipe:</b>Cook the mini beef patties in a hot pan until browned and juicy, and bake the potato wedges in the oven at 200°C (400°F) until crispy. In a bowl, add lettuce, tomatoes, avocado, the patties, and wedges, then drizzle everything with burger sauce and mix lightly before serving.</p>
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

export default DinnerDetails3;