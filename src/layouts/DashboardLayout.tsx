import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/organisms/DashboardSidebar";

function DashboardLayout() {
  return (
    <div className="site-layout">

      <div className="dashboard-layout">
        <DashboardSidebar />
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;