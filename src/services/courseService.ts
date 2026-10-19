import { courses } from "../datas/courses";
import type { Course } from "../types/course";

export type CourseLoadMode = "success" | "empty" | "error";

export function getCourses(
  mode: CourseLoadMode = "success",
): Promise<Course[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mode === "error") {
        reject(new Error("Không thể tải danh sách khóa học."));
        return;
      }

      if (mode === "empty") {
        resolve([]);
        return;
      }

      resolve(courses.map((course) => ({ ...course })));
    }, 1000);
  });
}