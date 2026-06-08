"use client";

import Stripe from "stripe";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  if (!products || products.length === 0) return null;

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
      
      <div className="flex items-end justify-between mb-8 md:mb-10 px-1">
        <div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 block">
            Destaques
          </span>
          <h2 className="text-xl md:text-3xl font-black tracking-tight text-zinc-950 mt-1.5 uppercase">
            Novidades da Coleção
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-zinc-200 text-zinc-800 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all duration-300"
            aria-label="Anterior"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-zinc-200 text-zinc-800 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all duration-300"
            aria-label="Próximo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto md:overflow-hidden no-scrollbar snap-x snap-mandatory pb-4 md:pb-0">
        <div
          className="flex gap-4 md:gap-6 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            transform: isMobile ? "none" : `translateX(-${current * (100 / itemsPerPage)}%)`,
          }}
        >
          {products.map((product) => {
            const price = product.default_price as Stripe.Price;

            return (
              <div
                key={product.id}
                className="w-[82%] min-w-[82%] sm:w-[45%] sm:min-w-[45%] md:w-[calc(33.333%-16px)] md:min-w-[calc(33.333%-16px)] flex-0 snap-start snap-always"
              >
                <Link href={`/products/${product.id}`} className="block group">
                  
                  {product.images && product.images[0] && (
                    <div className="relative aspect-3/4 w-full bg-zinc-50 rounded-xl overflow-hidden shadow-sm transition-shadow duration-500 group-hover:shadow-md">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="(max-w-7xl) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority
                      />
                      
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  )}

                  <div className="mt-4 px-1 space-y-1">
                    <h3 className="font-semibold text-sm md:text-base text-zinc-900 tracking-tight line-clamp-1 group-hover:text-zinc-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    {price && price.unit_amount && (
                      <p className="text-sm md:text-base font-medium text-zinc-500">
                        R$ {(price.unit_amount / 100).toFixed(2)}
                      </p>
                    )}
                  </div>

                </Link>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};