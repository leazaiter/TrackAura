import "../styles/BreakfastDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import { useLocation } from "react-router-dom";
import salmonbaked from "../images/salmonbaked.jpeg";

function DinnerDetails2() {
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
      <img className="details-img" src={salmonbaked} alt={meal.name} />
      <h2>{meal.name}</h2>
      <p><b>Ingredients:</b>• Salmon (raw): 120 g
• Cooked rice: ½ cup (about 100 g cooked)
• Asparagus: ½ cup (about 70 g)
• Broccoli: ½ cup (about 70 g)
• Olive oil: 1 tsp (5 ml)
• Lemon juice: to taste
• Spices: salt, black pepper, garlic powder, paprika</p>
      <p><b>Recipe:</b>Season the salmon with lemon juice, olive oil, salt, pepper, and spices, then bake it at 200°C (400°F) for 12–15 minutes until flaky. Serve it with ½ cup cooked rice and lightly steamed asparagus and broccoli on the side.</p>
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

export default DinnerDetails2;