import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import { Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <div>
      <Navbar />
      {/* harus dari parent ke child */}
    <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route  path="/about" element={<AboutPage />} />
      <Route  path="/contact" element={<ContactPage />} />
    </Routes>
    </div>
  );
}

export default App;  
