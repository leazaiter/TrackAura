import react from "react";
import "../styles/Aboutus.css";
import aboutusimg from "../images/Aboutus.jpeg";

function Aboutus(){
    return(
        <div className="page2">
           <h2 className="Title">About us</h2>
           <div className="container">
           <img src={aboutusimg} alt="Aboutus"/>
           <p className="history">This app started with a simple problem: we were tired of guessing whether we were actually making progress. We tried notebooks, random apps, and generic plans, but nothing really connected food, workouts, and results in one clear place. 
So we decided to build what we couldn’t find a tool that shows how your daily choices add up over time. We wanted something honest, practical, and adaptable, not another app full of empty motivation. That’s how this platform was born: from real frustration, real learning, and a desire to make fitness and nutrition easier to understand and stick with. Our goal is to help you build habits that fit your life, not someone else’s highlight reel.</p>
        </div>
        </div>
    )
}
export default Aboutus;