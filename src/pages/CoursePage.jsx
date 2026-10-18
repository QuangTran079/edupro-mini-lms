import CourseGrid from "../components/organisms/CourseGrid";
import { courses } from "../datas/courses";

function CoursePage(){
 return (
    <section className="page">
      <div className="courses-toolbar">
        <div className="courses-heading">
          <h1>Explore Courses</h1>
          <p>Discover new skills and advance your career path.</p>
        </div>

      </div>

        <CourseGrid
          courses={courses}
        />
    </section>
 );   
}
export default CoursePage;