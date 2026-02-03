import React from 'react';
import "../styles/Whycreateanaccount.css";
import Whycreateanaccountimg from "../images/Whycreateanaccount.jpeg";

function Whycreateanaccount() {
  return (
    <div className="page3">
      <h2 className="title3">Why Create An Account?</h2>
      <p className="account">Create an account to get a personalized view of your nutrition, workouts, and progress. All in one place, built around your goals and your daily routine.</p>
      <div className="content-wrapper"> 
      <div className="steps-container">
      <h2 className="subtitle">Steps</h2>
      <ul>
        <li>Create an account</li>
        <li>Set your profile (age, weight, goal)</li>
        <li>Add meals & steps daily</li>
        <li>Track progress with dashboard</li>
      </ul>
      </div>
      <img src={Whycreateanaccountimg} alt="Whycreateanaccount" className='img3'/>
    </div>
    </div>
  )
}

export default Whycreateanaccount;