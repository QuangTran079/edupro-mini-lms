import { Outlet } from "react-router-dom";

import Header from "../ui/Header";

function DashboardLayout() {
  return (
    <div className="site-layout">
      <Header />

      <div className="dashboard-layout">

        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;