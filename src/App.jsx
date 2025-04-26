import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
    </div>
  );
}

export default App
