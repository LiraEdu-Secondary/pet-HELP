import PetCard from "./PetCard";

export default function RecentlyLostPets() {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-0">
        <div className="flex flex-col gap-2">
          {/*Titulo e link*/}
          <h1 className="text-3xl font-bold text-[#1F2937]">
            Pets perdidos recentemente
          </h1>
          <p className="text-sm text-[#6B7280]">Veja se algum deles está na sua vizinhança.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-5">
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </div>
    </section>
  );
}
