import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route  />
    </Routes>
  </Router>
  );
}

export default App
