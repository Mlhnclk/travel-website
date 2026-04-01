
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Pages/Home/Home';
import Destination from './Pages/Destinations/Destinations';
import Holidays from './Pages/Holidays/Holidays';
import CityBreaks from './Pages/CityBreaks/CityBreaks';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/city-breaks" element={<CityBreaks />} />
      </Routes>
      
        
      <Footer />  
      
    </div>    
  );
}

export default App;
