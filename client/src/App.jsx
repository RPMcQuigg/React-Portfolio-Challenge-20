import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Contact from '../components/Contact.jsx';
import Resume from '../components/Resume.jsx';
import Footer from '../components/Footer.jsx';
import AboutMe from '../components/AboutMe.jsx';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route index="/aboutMe" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;