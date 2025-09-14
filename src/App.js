import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header'
import Weather from './components/weather/Weather'
import News from './components/news/News'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Weather />
      <News />
      <Footer />
    </div>
  );
}

export default App;
