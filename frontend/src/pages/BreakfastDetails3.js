import "../styles/BreakfastDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import { useLocation } from "react-router-dom";
import salmon from "../images/salmontoasts.jpeg";

function BreakfastDetails3() {
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
      <img className="details-img" src={salmon} alt={meal.name}/>
      <h2>{meal.name}</h2>
      <p><b>Ingredients:</b>2 whole-wheat toast, 80g smoked salmon, 1/2 medium avocado~75g, 1/2 cup of mango~80g, 1 cup of iceberg, 2 large eggs, 1 tbsp pf cream cheese~15g</p>
      <p><b>Recipe:</b>Toast the bread, boil the eggs, then spread cream cheese on the toast, add smoked salmon and avocado on top, and serve with the eggs, mango, and lettuce on the side/top </p>
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

export default BreakfastDetails3;
