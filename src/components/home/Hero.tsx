import { Card } from "../ui/card";

export default function Hero() {
  return (
    <section className="bg-[#FFF7F0]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:min-h-[36.6rem] lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-0">
        <div className="flex flex-col items-center gap-5 border border-red-500">
          <article className="flex flex-col gap-8 p-4">
            <h1 className="text-5xl font-bold">
              Ajude a levar todo pet de volta para sua casa
            </h1>
            {/*Legenda*/}
            <p className="text-sm text-[#4B5563] max-w-[400px] ">
              Cadastre um pet perdido ou encontrado e conecte-se com pessoas da
              sua região em poucos minutos.
            </p>
          </article>

          {/*Busca Pet*/}
          <Card>
            
          </Card>
        </div>
        <div className="border border-red-500">bloco direito</div>
      </div>
    </section>
  );
}
