"use client";

import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import { useEffect } from "react";
// Importación corregida usando Heroicons según image_7ceb43.png
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center border border-zinc-100 rounded-2xl p-8 md:p-12 shadow-sm bg-zinc-50/50">
        
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-white-50 rounded-full text-zinc-600">
            <CheckCircleIcon className="w-22 h-22 stroke-[1.5]" />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-950 mb-3">
          Pagamento Concluído!
        </h1>
        
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto">
          Obrigado pela sua compra. O seu pedido já está sendo processado em nosso sistema e logo enviaremos os detalhes.
        </p>

        <div className="space-y-3">
          <Link 
            href="/products" 
            className="block w-full bg-zinc-950 text-white text-sm font-medium py-3 px-4 rounded-xl hover:bg-zinc-800 transition-colors duration-200 tracking-wide"
          >
            Continuar Comprando
          </Link>
          
          <Link 
            href="/" 
            className="block w-full text-zinc-500 hover:text-zinc-900 text-xs font-medium py-2 transition-colors duration-200"
          >
            Voltar para o início
          </Link>
        </div>

      </div>
    </div>
  );
}