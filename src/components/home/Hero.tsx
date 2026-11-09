import { Button } from "../ui/button";
import { Card } from "../ui/card";
import PetStatusCard from "./PetStatusCard";

export default function Hero() {
  return (
    <section className="bg-[#FFF7F0]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:min-h-[36.6rem] lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-0">
        <div className="flex flex-col gap-3">
          {/* Rótulo */}
          <div className="inline-flex w-fit self-start items-center rounded-full bg-[#FFE5D0] px-4  py-2">
            <p className="text-xs font-medium leanding-none text-[#c2410c]">
              Comunidade de manaus ajudando pets
            </p>
          </div>
          <article className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold text-[#1F2937]">
              Ajude a levar todo pet de volta para sua casa
            </h1>
            {/*Legenda*/}
            <p className="text-sm text-[#4B5563] max-w-md">
              Cadastre um pet perdido ou encontrado e conecte-se com pessoas da
              sua região em poucos minutos.
            </p>
          </article>

          {/*Busca Pet*/}
          <div className="w-full max-w-xl ">
            <Card className="grid w-full grid-cols-1 items-center gap-2 p-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] shadow-xl">
              <div className="flex min-w-0 flex-col  px-2">
                <span className="text-xs text-[#6B7280]">Onde</span>
                <span>Bairro ou cidade</span>
              </div>
              <div className="flex min-w-0 flex-col  border-t border-gray-200 px-2 pt-2 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
                <span className="text-xs text-[#6B7280]">Tipo de pet</span>
                <span>Cachorro, gato...</span>
              </div>
              <Button variant="primary" className="cursor-pointer text-xs p-5">
                Buscar
              </Button>
            </Card>
          </div>
          {/*Resultados. Pets cadastrados, reecontros e tempo media de resposta*/}
          <div className="flex p-3 gap-8">
            <div className="flex flex-col justify-center items-start">
              <span className="text-3xl font-bold text-[#F2711C]">1.280+</span>
              <span className="text-xs text-[#6B7280]">pets cadastrados</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-[#F2711C]">800</span>
              <span className="text-xs text-[#6B7280]">reencontros</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-[#F2711C]">24H</span>
              <span className="text-xs text-[#6B7280]">
                tempo médio de resposta
              </span>
            </div>
          </div>
        </div>
        {/*Imagem do pet com o tutor*/}
        <div className="relative mx-auto aspect-4/3 w-full max-w-xl overflow-hidden rounded-3xl bg-[#FFE5D0]">
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-orange-700">
            Imagem de destaque (pet + tutor)
          </div>

          {/*Card de status do pet*/}
          <div className="absolute bottom-3 left-4">
            <PetStatusCard />
          </div>
        </div>
      </div>
    </section>
  );
}
