import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import ServicesPage from "./pages/Services.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import DoctorsPage from "./pages/Doctors.jsx";
import BlogPage from "./pages/Blog.jsx";
import ContactPage from "./pages/Contact.jsx";
import AppointmentPage from "./pages/Appointment.jsx";


import CareersPage from "./pages/Careers.jsx";
import EquipmentPage from "./pages/Equipment.jsx";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="services/:slug" element={<ServiceDetails />} />
      <Route path="doctors" element={<DoctorsPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="appointment" element={<AppointmentPage />} />
      <Route path="careers" element={<CareersPage />} />
      <Route path="equipment" element={<EquipmentPage />} />
    </Route>
  </Routes>
);

export default App;
