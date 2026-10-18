import { useParams } from "react-router-dom";

import CourseDetail from "../components/organisms/CourseDetail";
import { courses } from "../datas/courses";
import NotFoundPage from "./NotFoundPage";

function CourseDetailPage() {
  const { courseId } = useParams();
  const id = Number(courseId);

  const course = Number.isSafeInteger(id)
    ? courses.find((item) => item.id === id)
    : undefined;

  if (!course) {
    return <NotFoundPage />;
  }

  return <CourseDetail course={course} />;
}

export default CourseDetailPage;