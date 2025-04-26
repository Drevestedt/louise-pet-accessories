import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <nav className="bg-yellow-500 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold hover:text-orange-700 transition-colors"><a href="#">Louise´s Pet Accessories</a></h1>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6">
        <li><a className="hover:text-orange-700 transition-colors" href="#">Dogs</a></li>
        <li><a className="hover:text-orange-700 transition-colors" href="#">Cats</a></li>
        <li><a className="hover:text-orange-700 transition-colors" href="#">Birds</a></li>
        <li><a className="hover:text-orange-700 transition-colors" href="#">Fish</a></li>
        <li><a className="hover:text-orange-700 transition-colors" href="#">Rodents</a></li>
      </ul>

      {/* Mobile Hamburger menu */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
      ☰
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-yellow-500 flex flex-col items-center gap-4 py-4 md:hidden">
          <li><a className="hover:text-orange-700 transition-colors" href="#">Dogs</a></li>
          <li><a className="hover:text-orange-700 transition-colors" href="#">Cats</a></li>
          <li><a className="hover:text-orange-700 transition-colors" href="#">Birds</a></li>
          <li><a className="hover:text-orange-700 transition-colors" href="#">Fish</a></li>
          <li><a className="hover:text-orange-700 transition-colors" href="#">Rodents</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar 