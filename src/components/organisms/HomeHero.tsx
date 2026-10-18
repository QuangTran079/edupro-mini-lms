import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <>
      <section className="home-hero">
        <span className="home-hero__badge">Learn with EduPro</span>

        <h1>
          Unlock Your Potential with <span>Expert-Led Courses</span>
        </h1>

        <p>
          Master the latest skills in coding, design, and business.
          Learn from industry experts and take your career to the next level.
        </p>

        <div className="home-hero__actions">
          <Link to="/courses" className="courses-button">
            Browse Courses →
          </Link>

          <Link to="/" className="home-button-secondary">
            Start Learning
          </Link>
        </div>

        <ul className="home-hero__benefits">
          <li>✓ Flexible Learning</li>
          <li>✓ Expert Instructors</li>
          <li>✓ Practical Skills</li>
        </ul>
      </section>

    </>
  );
}

export default HomeHero;