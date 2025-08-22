import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header'
import Weather from './components/weather/Weather'
import News from './components/news/News'
import Picture from './components/picture/Picture'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Weather />
      <News />
      <Picture />
      <Footer />
    </div>
  );
}

export default App;
