import { useParams } from "react-router-dom";

import CourseDetail from "../components/organisms/CourseDetail";
import { useCourses } from "../hooks/useCourses";
import NotFoundPage from "./NotFoundPage";

function CourseDetailPage() {
  const { courseId } = useParams();
  const { courses, status, error, reload } = useCourses();

  const id = Number(courseId);

  if (!Number.isSafeInteger(id) || id <= 0) {
    return <NotFoundPage />;
  }

  if (status === "idle" || status === "loading") {
    return (
      <div className="course-status" role="status">
        Đang tải thông tin khóa học…
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="course-status" role="alert">
        <p>{error}</p>

        <button type="button" onClick={() => reload()}>
          Thử lại
        </button>
      </div>
    );
  }

  const course = courses.find((item) => item.id === id);

  if (!course) {
    return <NotFoundPage />;
  }

  return <CourseDetail course={course} />;
}

export default CourseDetailPage;