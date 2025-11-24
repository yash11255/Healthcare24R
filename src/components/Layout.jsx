import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = () => (
  <div className="min-h-screen bg-white text-secondary">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;

