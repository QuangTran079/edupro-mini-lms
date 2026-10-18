import { CourseGridProps } from "../../types/course";
import CourseCard from "../molecules/CourseCard";

function CourseGrid({
  courses,
  favoriteIds = [],
  onToggleFavorite,
}: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="course-empty">
        <p>Hiện Chưa có khóa học nào</p>
      </div>
    );
  }

  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          
        />
      ))}
    </div>
  );
}
export default CourseGrid;
