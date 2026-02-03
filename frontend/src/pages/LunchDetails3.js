import "../styles/BreakfastDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import { useLocation } from "react-router-dom";
import shawarma from "../images/greekshawarma.jpeg";

function LunchDetails3() {
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
      <img className="details-img" src={shawarma} alt={meal.name} />
      <h2>{meal.name}</h2>
      <p><b>Ingredients:</b>3 medium tortillas~60g each, chicken shawarma~200g cooked,3 tbsp of greek white sauce~45g, 1 cup iceberg~50g. For the side salad: 1/2 cup tomatoes~80g, 1/2 cup cucumber~50g, 1/4 cup onion~30g. Fries~150g cooked ,2tbsp of side sauce/dip~30g</p>
      <p><b>Recipe:</b>Warm the tortillas, fill them with seasoned chicken shawarma, add Greek white sauce and iceberg lettuce, then roll them into sandwiches. Serve with fries and a side salad of tomatoes, cucumber, and onion plus a little extra sauce on the side.</p>
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

export default LunchDetails3;