import './App.css'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter basename={import.meta.env.MODE === 'production' ? "/louise-pet-accessories" : "/"}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path= "/" element={<HomePage />} />
            <Route path="/:category" element={<ProductsPage />} />
        </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
