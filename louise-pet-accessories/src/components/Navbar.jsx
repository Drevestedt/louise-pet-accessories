 import { useState } from "react";
 import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <nav className="bg-yellow-500 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold hover:text-orange-700 transition-colors"><Link to="/">Louise´s Pet Accessories</Link></h1>

      {/* Desktop menu */}
      <ul className="hidden lg:flex gap-6">
        <li><Link to="/dogs" className="hover:text-orange-700 transition-colors">Dogs</Link></li>
        <li><Link to="/cats" className="hover:text-orange-700 transition-colors">Cats</Link></li>
        <li><Link to="/birds" className="hover:text-orange-700 transition-colors">Birds</Link></li>
        <li><Link to="/fish" className="hover:text-orange-700 transition-colors">Fish</Link></li>
        <li><Link to="/rodents" className="hover:text-orange-700 transition-colors">Rodents</Link></li>
      </ul>

      {/* Mobile Hamburger menu */}
      <button
        className="lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
      ☰
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-yellow-500 flex flex-col items-center gap-4 py-4 lg:hidden">
          <li><Link to="/dogs" className="hover:text-orange-700 transition-colors">Dogs</Link></li>
          <li><Link to="/cats" className="hover:text-orange-700 transition-colors">Cats</Link></li>
          <li><Link to="/birds" className="hover:text-orange-700 transition-colors">Birds</Link></li>
          <li><Link to="/fish" className="hover:text-orange-700 transition-colors">Fish</Link></li>
          <li><Link to="/rodents" className="hover:text-orange-700 transition-colors">Rodents</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar 