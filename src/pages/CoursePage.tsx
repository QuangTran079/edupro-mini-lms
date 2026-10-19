import CourseGrid from "../components/organisms/CourseGrid";
import { useCourses } from "../hooks/useCourses";

function CoursePage() {
  const { courses, status, error, reload } = useCourses();

  return (
    <section className="page">
      <div className="courses-toolbar">
        <div className="courses-heading">
          <h1>Explore Courses</h1>
          <p>Discover new skills and advance your career path.</p>
        </div>
      </div>

      {(status === "idle" || status === "loading") && (
        <div className="course-status" role="status">
          Đang tải danh sách khóa học…
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
        (courses.length > 0 ? (
          <CourseGrid courses={courses} />
        ) : (
          <div className="course-status">
            Chưa có khóa học nào.
          </div>
        ))}
    </section>
  );
}

export default CoursePage;