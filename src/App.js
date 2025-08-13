import logo from './logo.svg';
import './App.css';
import TileNavbar from './components/TileNavbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import OurProjects from './components/OurProjects';
import ConceptCompletion from './components/ConceptCompletion';
import ContactPage from './components/ContactPage';
import ChatBot from './components/Chatbot';


function App() {
  return (
    <div className="App">
     <ChatBot />
     <TileNavbar />
     <HomePage />
     <AboutPage />
     <ServicesPage />
     <OurProjects />
     <ConceptCompletion />
     <ContactPage />
     <Footer />
    </div>
  );
}

export default App;
