import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getCourses } from "../../services/courseService";
import type { CourseLoadMode } from "../../services/courseService";
import type { RootState } from "../../store";
import { Course } from "../../types/course";

type CoursesState = {
  items: Course[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: CoursesState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchCourses = createAsyncThunk<
  Course[],
  CourseLoadMode | undefined,
  { state: RootState }
>(
  "courses/fetchCourses",

  async (mode) => {
    return await getCourses(mode);
  },

  {
    condition: (_mode, { getState }) => {
      return getState().courses.status !== "loading";
    },
  },
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })

      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message ?? "Đã xảy ra lỗi khi tải khóa học.";
      });
  },
});

export default coursesSlice.reducer;