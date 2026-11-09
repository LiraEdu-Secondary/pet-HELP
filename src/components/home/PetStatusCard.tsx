export default function PetStatusCard() {
  return (
    <div className="flex w-fit items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg">
      <span
        aria-hidden="true"
        className="h-3 w-3 shrink-0 rounded-full bg-green-600"
      />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold leading-tight text-shadow-slate-800">
          Mel voltou para casa
        </p>
        <p className="text-xs leading-tight text-slate-500">
          Reencontro há 1 hora
        </p>
      </div>
    </div>
  );
}
