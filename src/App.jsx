import './App.css'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter basename="/louise-pet-accessories">
      <Navbar />
      <Routes>
        <Route path= "/" element={<HomePage />} />
        <Route path="/:category" element={<ProductsPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App
