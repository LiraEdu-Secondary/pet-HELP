import { Link } from "react-router-dom";
import PetCard from "./PetCard";
import { ArrowRight } from "lucide-react";

export default function RecentlyLostPets() {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-0">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            {/*Titulo e link*/}
            <h2 className="text-3xl font-bold text-[#1F2937]">
              Pets perdidos recentemente
            </h2>
            <p className="text-sm text-[#6B7280]">
              Veja se algum deles está na sua vizinhança.
            </p>
          </div>
          <Link
            to="/lost"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700"
          >
            Ver todos
            <span aria-hidden="true">
              <ArrowRight size="13" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </div>
    </section>
  );
}
