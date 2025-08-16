import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import Learn from "./pages/Learn";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Portfolio />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  );
};

export default App;
