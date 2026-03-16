import Footer from "./Components/Footers/Footer.jsx";
import Header from "./Components/Header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Works from "./Components/Works/Work.jsx";
import Contact from "./Components/Contact/Contact.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
