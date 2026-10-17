import { Outlet } from "react-router-dom";

import Header from "../ui/Header";
import Footer from "../ui/Footer";
function MainLayout() {
  return (
    <div className="site-layout">
      <Header />

      <main className="public-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;