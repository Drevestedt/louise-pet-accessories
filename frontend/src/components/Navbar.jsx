import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <nav className="bg-yellow-500 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold hover:text-orange-700 transition-colors"><Link to="/">Louise´s Pet Accessories</Link></h1>

      <div className="flex items-center mr-8">
        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-6">
          <li><Link to="/dogs" className="hover:text-orange-700 transition-colors">Dogs</Link></li>
          <li><Link to="/cats" className="hover:text-orange-700 transition-colors">Cats</Link></li>
          <li><Link to="/birds" className="hover:text-orange-700 transition-colors">Birds</Link></li>
          <li><Link to="/fish" className="hover:text-orange-700 transition-colors">Fish</Link></li>
          <li><Link to="/rodents" className="hover:text-orange-700 transition-colors">Rodents</Link></li>
        </ul>
        {/* Shopping Cart */}
        <Link to="#" className="relative hover:text-orange-700 transition-colors text-xl ml-12"><FontAwesomeIcon icon={faCartShopping} />
          { /* Cart item count badge */ }
          <span className="absolute -top-2 -right-3 bg-orange-700 text-white text-xs rounded-full font-bold px-1.5 py-0.5 ">3</span>
          { /* Add {cartCount} here later */ }
        </Link>
      </div>

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