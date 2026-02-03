import Dashboard from "./Dashboard";
import Meals from "./Meals";
import Workouts from "./Workout";
import Activities from "./Activities";
import Footer from "./Footer";

function Account() {
  return (
    <div className="account-page">
      <Dashboard />
      <Meals />
      <Workouts />
      <Activities />
      <Footer />
    </div>
  );
}

export default Account;