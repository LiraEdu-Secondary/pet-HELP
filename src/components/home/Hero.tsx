import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function Hero() {
  return (
    <section className="bg-[#FFF7F0]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:min-h-[36.6rem] lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-0">
        <div className="flex flex-col gap-5">
          <article className="flex flex-col gap-8 p-4">
            <h1 className="text-5xl font-bold">
              Ajude a levar todo pet de volta para sua casa
            </h1>
            {/*Legenda*/}
            <p className="text-sm text-[#4B5563] max-w-400">
              Cadastre um pet perdido ou encontrado e conecte-se com pessoas da
              sua região em poucos minutos.
            </p>
          </article>

          {/*Busca Pet*/}
          <div className="w-full max-w-xl ml-5">
            <Card className="grid w-full grid-cols-1 items-center gap-2 p-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] shadow-xl">
              <div className="flex min-w-0 flex-col  px-2">
                <span className="text-xs text-[#6B7280]">Onde</span>
                <span>Bairro ou cidade</span>
              </div>
              <div className="flex min-w-0 flex-col  border-t border-gray-200 px-2 pt-2 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
                <span className="text-xs text-[#6B7280]">Tipo de pet</span>
                <span>Cachorro, gato...</span>
              </div>
              <Button variant="primary" className="cursor-pointer text-xs p-5">Buscar</Button>
            </Card>
          </div>
        </div>
        <div className="border border-red-500">bloco direito</div>
      </div>
    </section>
  );
}
