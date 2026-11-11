import { Card, CardContent } from "../ui/card";

export default function PetCard() {
  return (
    <Card className="gap-0 p-0">
      <div className="relative aspect-3/2 bg-[#FFE5D0]">
        <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-2.5 py-1 text-xs text-white">
          Perdido
        </span>
        <div className="flex h-full items-center justify-center text-sm text-orange-700">
          Foto do pet
        </div>
      </div>
      <CardContent className="flex flex-col gap-1 p-3">
        <h3 className="text-base font-semibold text-slate-800">Thor</h3>
        <p className="text-xs text-slate-500">Golden Retriever ~ Macho</p>
        <p className="text-xs text-orange-700">Adrianópolis ~ há 2 dias</p>
      </CardContent>
    </Card>
  );
}
