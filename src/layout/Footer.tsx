import { Link } from "react-router-dom";
import icone from "../assets/Ícone.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-5 justify-between  px-4 py-6 text-center md:flex-row md:justify-between md:px-6 md:py-5 md:text-left bg-[#1F2937] ">
      <div className="flex gap-2 items-center">
        <span>
          <img src={icone} alt="" className="h-8 w-8" />
        </span>
        <span className="text-lg text-white font-bold text-ink">
          Pet<span className="text-orange-400">HELP</span>
        </span>
      </div>
      <nav className="w-full md:w-auto">
        <ul className="flex flex-wrap justify-center gap-x-6  gap-y-3 md:gap-8">
          <Link
            to="/"
            className="cursor-pointer  text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200 ease-in-out"
          >
            Sobre
          </Link>
          <Link
            to="/lost"
            className="cursor-pointer  text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200 ease-in-out"
          >
            Contato
          </Link>
          <Link
            to="/found"
            className="cursor-pointer  text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200 ease-in-out"
          >
            Termos de uso
          </Link>
          <Link
            to="/how-it-work"
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200 ease-in-out"
          >
            Privacidade
          </Link>
        </ul>
      </nav>
      <div>
        <span className="text-xs text-gray-400">
          © 2026 PetHELP · Feito em Manaus
        </span>
      </div>
    </footer>
  );
}
