import Hero from "../components/Hero.jsx";
import QuickActions from "../components/QuickActions.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Stats from "../components/Stats.jsx";
import Doctors from "../components/Doctors.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Blog from "../components/Blog.jsx";
import Contact from "../components/Contact.jsx";
import EOIForm from "../components/EOIForm.jsx";

const Home = () => (
  <main>
    <Hero />
    <QuickActions />
    <About />
    <Services />
    <Stats />
    {/* <Doctors /> */}
    <Testimonials />
    <Blog />
    {/* <EOIForm /> */}
    <Contact />
  </main>
);

export default Home;

