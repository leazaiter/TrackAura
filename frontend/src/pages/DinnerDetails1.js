import "../styles/BreakfastDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CaloriesContext } from "./Dashboard";
import { useLocation } from "react-router-dom";
import bitofeverything from "../images/bitofeverything.jpeg";

function DinnerDetails1() {
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
      <img className="details-img" src={bitofeverything} alt={meal.name} />
      <h2>{meal.name}</h2>
      <p><b>Ingredients:</b>Cream cheese: ¼ cup ~ 60 g
	•	Apples: ½ medium ~ 75 g
	•	Strawberries: ½ cup ~ 75 g
	•	Grapes: ½ cup ~ 75 g
	•	Carrots: ½ medium ~ 60 g
	•	Cashews: 6–8 pieces ~ 15 g
	•	Cheese (light slice, e.g., cheddar or mozzarella): 20 g
	•	Turkey (deli slices): 50 g
	•	Bell peppers: ½ cup ~ 50 g
	•	Peanut butter: ½ tbsp ~ 8 g</p>
      <p><b>Recipe:</b>Cut all the fruits and vegetables into bite-size pieces, arrange them on a plate with the turkey and cheese, add the cashews on the side, and use the cream cheese and peanut butter as small dips to eat everything together.</p>
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

export default DinnerDetails1;