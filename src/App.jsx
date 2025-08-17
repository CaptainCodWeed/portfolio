import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import LearnWithMe from "./pages/LearnWithMe";
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
        <Route path="/learn" element={<LearnWithMe />} />
      </Routes>
    </Router>
  );
};

export default App;
