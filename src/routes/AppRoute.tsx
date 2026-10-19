import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import CoursePage from "../pages/CoursePage";
import LoginPage from "../pages/LoginPage";
import DashboarLayout from "../layouts/DashboardLayout";
import FavoritePage from "../pages/FavoritePage";
import CourseDetailPage from "../pages/CourseDetailPage";
import PrivateRoute from "./PrivateRoute";
import DashboardPage from "../pages/DashboardPage";
import SettingsPage from "../pages/SettingsPage";
import MyCoursesPage from "../pages/MyCoursesPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursePage />} />
        <Route path="courses/:courseId" element={<CourseDetailPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="*" element={<NotFoundPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="dashboard/" element={<DashboarLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="favorites" element={<FavoritePage />} />
            <Route path="my-courses" element={<MyCoursesPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
export default AppRoutes;
