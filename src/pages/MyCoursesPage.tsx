import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth/useAuth";
import { enrollments } from "../datas/enrollments";
import { courses } from "../datas/courses";
import CourseGrid from "../components/organisms/CourseGrid";



function MyCoursesPage() {
  const { user } = useAuth();

  // Lấy email người đang đăng nhập
  const email = user?.email.trim().toLowerCase();

  // Lấy danh sách ID khóa học của người đó
  const enrolledIds = email ? enrollments[email] ?? [] : [];

  // Tìm các object khóa học tương ứng
  const myCourses = courses.filter((course) =>
    enrolledIds.includes(course.id),
  );

  return (
    <section className="my-courses">
      <h1>My Courses</h1>
      <p>Manage and continue your enrolled courses.</p>

      {myCourses.length > 0 ? (
        <CourseGrid courses={myCourses} />
      ) : (
        <div className="my-courses__empty">
          <h2>No courses yet</h2>
          <p>You haven’t enrolled in any courses yet.</p>
          <Link to="/courses">Browse Courses</Link>
        </div>
      )}
    </section>
  );
}

export default MyCoursesPage;