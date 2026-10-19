import { Link } from "react-router-dom";

import CourseGrid from "../components/organisms/CourseGrid";
import { enrollments } from "../datas/enrollments";
import { useAuth } from "../features/auth/useAuth";
import { useCourses } from "../hooks/useCourses";

function MyCoursesPage() {
  const { user } = useAuth();
  const { courses, status, error, reload } = useCourses();

  const email = user?.email.trim().toLowerCase();

  const enrolledIds = email ? enrollments[email] ?? [] : [];

  const myCourses = courses.filter((course) =>
    enrolledIds.includes(course.id),
  );

  return (
    <section className="my-courses">
      <h1>My Courses</h1>
      <p>Manage and continue your enrolled courses.</p>

      {(status === "idle" || status === "loading") && (
        <div className="course-status" role="status">
          Đang tải khóa học của bạn…
        </div>
      )}

      {status === "failed" && (
        <div className="course-status" role="alert">
          <p>{error}</p>

          <button type="button" onClick={() => reload()}>
            Thử lại
          </button>
        </div>
      )}

      {status === "succeeded" &&
        (myCourses.length > 0 ? (
          <CourseGrid courses={myCourses} />
        ) : (
          <div className="my-courses__empty">
            <h2>No courses yet</h2>
            <p>You haven’t enrolled in any courses yet.</p>
            <Link to="/courses">Browse Courses</Link>
          </div>
        ))}
    </section>
  );
}

export default MyCoursesPage;