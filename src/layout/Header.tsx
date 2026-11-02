import { Link } from "react-router-dom";
import icone from "../assets/Ícone.svg";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100">
      <div className="flex items-center justify-between border-b border-gray-100 md:px-6 md:py-5">
        <div className="flex gap-2 items-center">
          <span>
            <img src={icone} alt="" className="h-8 w-8" />
          </span>
          <span className="text-lg font-bold text-ink">
            Pet<span className="text-orange-400">HELP</span>
          </span>
        </div>

        <button
          type="button"
          className="rounded-md p-3 text-gray-700 hover:bg-orange-50 md:hidden"
          aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav className="hidden md:flex items-center justify-center">
          <ul className="flex gap-8">
            <Link
              to="/"
              className="cursor-pointer transition-colors duration-200 ease-in-out hover:text-orange-500"
            >
              Inicio
            </Link>
            <Link
              to="/lost"
              className="cursor-pointer transition-colors duration-200 ease-in-out hover:text-orange-300"
            >
              Pets perdidos
            </Link>
            <Link
              to="/found"
              className="cursor-pointer transition-colors duration-200 ease-in-out hover:text-orange-300"
            >
              Pets encontrados
            </Link>
            <Link
              to="/how-it-work"
              className="cursor-pointer transition-colors duration-200 ease-in-out hover:text-orange-300"
            >
              Como funciona
            </Link>
          </ul>
        </nav>
        <div className="hidden md:flex gap-2">
          <Button
            variant="outline"
            className="text-orange-400 border-orange-400 hover:text-orange-400 cursor-pointer"
          >
            Entrar
          </Button>
          <Button className="bg-orange-400 cursor-pointer">
            Cadastrar pet
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          aria-label="Navegação mobile"
          className="w-full border-t pt-3  md:hidden"
        >
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                to="/"
                className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Ínicio
              </Link>
            </li>
            <li>
              <Link
                to="/lost"
                className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Pets perdidos
              </Link>
            </li>
            <li>
              <Link
                to="/found"
                className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Pets encontrados
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-work"
                className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Como funciona
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
