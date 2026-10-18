import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import CoursePage from "../pages/CoursePage";
import LoginPage from "../pages/LoginPage";
import DashboarLayout from "../layouts/DashboardLayout";
import FavoritePage from "../pages/FavoritePage";
import CourseDetailPage from "../pages/CourseDetailPage";

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="courses" element={<CoursePage />} />
                <Route path="courses/:courseId" element={<CourseDetailPage />} />
                <Route path="login" element={<LoginPage />} />


                <Route path="*" element={<NotFoundPage />} />
                
            </Route>
            <Route path="/dashboard/" element={<DashboarLayout/>}>
                <Route path="favorites" element={<FavoritePage />} />
                <Route path="*" element={<NotFoundPage />} />

            </Route>
        </Routes>
    );
}
export default AppRoutes;