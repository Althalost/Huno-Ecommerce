import { BoltIcon, TruckIcon } from "@heroicons/react/24/outline";

export const AnnouncementBar = () => {
  return (
    <div className="w-full bg-zinc-950 text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase border-b border-zinc-900">
      <div className="max-w-7xl mx-auto h-9 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-2 flex-1 md:flex-none justify-center md:justify-start">
          <TruckIcon className="w-4 h-4 text-zinc-400 stroke-2" />
          <span>Frete grátis para todo o Brasil a partir de R$ 399</span>
        </div>

        <div className="hidden md:flex items-center gap-2 ml-10">
          <BoltIcon className="w-4 h-4 text-zinc-400 stroke-2" />
          <span className="text-zinc-300">5% de desconto no Pix</span>
        </div>

      </div>
    </div>
  );
};