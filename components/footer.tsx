import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 border-t border-zinc-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="text-white font-black tracking-widest text-xl">
              HUNO
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-zinc-500 max-w-[240px]">
              Estilo urbano independente. Peças utilitárias com caimento heavyweight projetadas para o cotidiano.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Produtos</Link>
              </li>
              <li>
                <Link href="/carrinho" className="hover:text-white transition-colors">Carrinho</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Suporte
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">Envios e Entregas</span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">Trocas e Devoluções</span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">Termos de Serviço</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Contato
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-500">
              <li>
                E-mail: <span className="text-zinc-400">contato@huno.com.br</span>
              </li>
              <li>
                Instagram: <span className="text-zinc-400 hover:text-white cursor-pointer transition-colors">@huno.wear</span>
              </li>
              <li className="pt-2 text-[10px]">
                🇧🇷 São Paulo, Brasil
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-600 order-2 sm:order-1">
            &copy; {currentYear} HUNO. Todos os direitos reservados. Projeto Portfólio.
          </p>
          
          <div className="flex items-center gap-3 order-1 sm:order-2 opacity-40 grayscale hover:opacity-70 transition-opacity">
            <span className="text-[10px] font-bold tracking-wider border border-zinc-700 px-1.5 py-0.5 rounded uppercase text-zinc-300">
              Pix
            </span>
            <span className="text-[10px] font-bold tracking-wider border border-zinc-700 px-1.5 py-0.5 rounded uppercase text-zinc-300">
              Stripe
            </span>
            <span className="text-[10px] font-bold tracking-wider border border-zinc-700 px-1.5 py-0.5 rounded uppercase text-zinc-300">
              Visa
            </span>
            <span className="text-[10px] font-bold tracking-wider border border-zinc-700 px-1.5 py-0.5 rounded uppercase text-zinc-300">
              Mastercard
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};