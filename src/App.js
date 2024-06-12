import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <div className="background-container">
        <Navbar title="FurniShop" />
      </div>
      <Card />
      <AboutUs />
    </>
  );
}

export default App;
