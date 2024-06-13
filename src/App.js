import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import AboutUs from './components/AboutUs';
import Background from './components/Background';
import NewInStore from './components/NewInStore';


function App() {
  return (
    <>
      <div className="background-container">
        <Background />
        <Navbar title="FurniShop" />

      </div>
      <Card />
      <AboutUs />
      <NewInStore />
    </>
  );
}

export default App;
