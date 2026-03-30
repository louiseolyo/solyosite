// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sophroOpen, setSophroOpen] = useState(false);

  return (
    <header className="fixed w-full bg-cream shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 lg:py-6 flex items-center relative">
        <Link to="/" className={`absolute left-4 top-1/2 -translate-y-1/2 ${menuOpen ? 'pointer-events-none' : ''}`}>
  <img src="/img/logo-fonce.webp" alt="SoLyo - Louise Durieu" className="h-14 md:h-24 w-auto opacity-90" />
</Link>

        <button className="lg:hidden text-sage ml-auto" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <nav className="hidden lg:flex ml-auto items-center gap-8 text-sm md:text-base lg:text-lg z-20">

          {/* Menu déroulant Sophrologie */}
          <div className="relative" onMouseEnter={() => setSophroOpen(true)} onMouseLeave={() => setSophroOpen(false)}>
            <Link to="/sophrologie" className="hover:text-sage flex items-center gap-1">
    Sophrologie
    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </Link>
            {sophroOpen && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="bg-cream shadow-lg rounded-xl py-2 w-52 border border-olive/20">
                  <Link to="/sophrologie" className="block px-4 py-2 text-sm hover:text-terra hover:bg-sage/10 transition">
                    Sophrologie
                  </Link>
                  <Link to="/sophrologie/entreprises" className="block px-4 py-2 text-sm hover:text-terra hover:bg-sage/10 transition">
                    Sophrologie en entreprise
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/yoga" className="hover:text-sage">Yoga</Link>
          <Link to="/#about" className="hover:text-sage">Qui suis-je ?</Link>
          <Link to="/#temoignages" className="hover:text-sage">Témoignages</Link>
          <Link to="/#tarifs" className="hover:text-sage">Tarifs</Link>
          <Link to="/#rdv" className="hover:text-sage">Rendez-vous</Link>
          <Link to="/#contact" className="hover:text-sage">Contact</Link>
          <Link to="/blog" className="hover:text-sage">Blog</Link>
        </nav>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-cream border-t px-4 pb-4">
          <nav className="flex flex-col space-y-2 text-sm text-sage">
            <Link to="/sophrologie" onClick={() => setMenuOpen(false)}>Sophrologie</Link>
            <Link to="/sophrologie/entreprises" onClick={() => setMenuOpen(false)} className="pl-4 text-xs text-charbon">
              → Sophrologie en entreprise
            </Link>
            <Link to="/yoga" onClick={() => setMenuOpen(false)}>Yoga</Link>
            <Link to="/#about" onClick={() => setMenuOpen(false)}>Qui suis-je</Link>
            <Link to="/#temoignages" onClick={() => setMenuOpen(false)}>Témoignages</Link>
            <Link to="/#tarifs" onClick={() => setMenuOpen(false)}>Tarifs</Link>
            <Link to="/#rdv" onClick={() => setMenuOpen(false)}>Rendez-vous</Link>
            <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
