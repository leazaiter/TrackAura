import "../styles/Reviews.css";

function Reviews() {
  return (
    <div className="reviews-section">

      <h2 className="reviews-title">What Our Users Say</h2>

      <div className="reviews-grid">

        <div className="review-card">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <p className="name">Maya R.</p>
          <p className="text">
            “I’ve tried a lot of fitness apps, but this is the first one that
            actually helped me stay consistent. The meal tracking is simple
            and the workouts don’t feel overwhelming.”
          </p>
        </div>

        <div className="review-card">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <p className="name">Daniel K.</p>
          <p className="text">
            “What I like most is how everything is in one place. I can see my
            food, workouts, and progress without jumping between apps.”
          </p>
        </div>

        <div className="review-card">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <p className="name">Sara N.</p>
          <p className="text">
            “I started using this just to lose a few kilos, but it honestly
            changed how I look at food. The charts make it really clear what
            I’m doing right and wrong.”
          </p>
        </div>

        <div className="review-card">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <p className="name">Omar H.</p>
          <p className="text">
            “The interface is clean and easy to use. I don’t feel lost when I
            open it, which is rare for fitness apps.”
          </p>
        </div>

        <div className="review-card">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <p className="name">Lina T.</p>
          <p className="text">
            “I love that it doesn’t push extreme diets or crazy workouts. It
            feels realistic and sustainable.”
          </p>
        </div>
        
        <div className="review-card">
        <span className="stars">⭐⭐⭐⭐⭐</span>
        <p className="name">Nour A.</p>
        <p className="text">
           “TrackAura helped me build a daily routine without feeling pressured.
            Small changes every day actually started to add up. Highly recommended.”
       </p>
       </div>
       
      </div>
    </div>
  );
}

export default Reviews;
