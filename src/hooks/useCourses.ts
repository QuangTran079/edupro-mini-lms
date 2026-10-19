import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchCourses } from "../features/courses/coursesSlice";
import type { CourseLoadMode } from "../services/courseService";

export function useCourses() {
  const dispatch = useAppDispatch();

  const courses = useAppSelector((state) => state.courses.items);
  const status = useAppSelector((state) => state.courses.status);
  const error = useAppSelector((state) => state.courses.error);

  useEffect(() => {
    if (status === "idle") {
      void dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  function reload(mode: CourseLoadMode = "success") {
    void dispatch(fetchCourses(mode));
  }

  return {
    courses,
    status,
    error,
    reload,
  };
}