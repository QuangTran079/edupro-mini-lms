import { Link } from "react-router-dom";
import HomeHero from "../components/organisms/HomeHero";
import { courses } from "../datas/courses";
import CourseGrid from "../components/organisms/CourseGrid";

function HomePage(){
 return (
    <div className="home-page">
      <HomeHero/>

      <section className="home-featured">
        <div className="home-featured__heading">
          <div>
            <h2>Featured Courses</h2>
            <p>Hand-picked courses to get you started.</p>
          </div>

          <Link to="/courses">View All →</Link>
        </div>

          <CourseGrid
            courses={courses}
          />
      </section>


    </div>
    
 );   
}
export default HomePage;