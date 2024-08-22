import './App.css';
import Artist from './components/Artist';
import Contact from './components/Contact';
import Form from './components/Form';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Piercing from './components/Piercing';
import Welcome from './components/Welcome';
import Map from './components/Map';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Welcome/>
      <Artist/>
      <Gallery/>
      <Piercing/>
      <Contact/>
      <Form/>
      <Map/>
    </>
  );
}

export default App;
