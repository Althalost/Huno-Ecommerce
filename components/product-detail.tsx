"use client";

import { useState } from "react";
import Image from "next/image";
import Stripe from "stripe";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ShippingCalculator } from "./shipping-calculator";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  
  const availableSizes = product.metadata?.sizes 
    ? product.metadata.sizes.split(",") 
    : ["P", "M", "G", "GG"];

  const [selectedSize, setSelectedSize] = useState<string>(availableSizes[0]);

  const cartItemId = `${product.id}-${selectedSize}`;
  
  const cartItem = items.find((item) => item.id === cartItemId);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: cartItemId,
      name: product.name, 
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
      size: selectedSize,
    });
  };

  const formattedPrice = price?.unit_amount
    ? `R$ ${(price.unit_amount / 100).toFixed(2)}`
    : "N/A";

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-11 gap-8 lg:gap-16 items-start">
        
        <div className="md:col-span-5 w-full flex justify-center md:justify-start">
          {product.images && product.images[0] && (
            <div className="relative aspect-square w-full max-w-115 rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 shadow-sm">
              <Image 
                src={product.images[0]} 
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                loading="eager"
                className="object-cover transition-transform duration-500 hover:scale-102"
                priority
              />
            </div>
          )}
        </div>

        <div className="md:col-span-6 flex flex-col pt-2">
          
          <div className="border-b border-zinc-100 pb-6 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">
              Coleção Permanente / HUNO
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-950 mb-3 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-zinc-950 tracking-tight">
              {formattedPrice}
            </p>
          </div>

          {product.description && (
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                Descrição
              </h3>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
                {product.description}
              </p>
            </div>
          )}

          <div className="mb-8 pt-4 border-t border-zinc-100">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Tamanho Selecionado: <span className="text-zinc-950 font-black">{selectedSize}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`h-11 min-w-12 px-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                    selectedSize === size
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-sm scale-102"
                      : "bg-white text-zinc-800 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
              Quantidade no carrinho
            </h3>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              <div className="flex items-center justify-between border border-zinc-200 rounded-xl h-12 bg-zinc-50/50 px-2 min-w-[130px]">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="w-8 h-8 text-zinc-500 hover:text-zinc-950 text-lg rounded-lg transition-colors"
                  onClick={() => removeItem(cartItemId)}
                  disabled={quantity === 0}
                >
                  -
                </Button>
                <span className="text-sm font-bold text-zinc-950 w-6 text-center select-none">
                  {quantity}
                </span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="w-8 h-8 text-zinc-500 hover:text-zinc-950 text-lg rounded-lg transition-colors"
                  onClick={onAddItem}
                >
                  +
                </Button>
              </div>

              <Button 
                onClick={onAddItem}
                className="flex-1 h-12 bg-zinc-950 text-white hover:bg-zinc-800 rounded-xl font-medium text-sm gap-2 transition-colors duration-200 shadow-sm"
              >
                <ShoppingCartIcon className="w-4 h-4 stroke-2" />
                {quantity > 0 ? "Adicionar mais um" : "Adicionar ao Carrinho"}
              </Button>

            </div>

            <p className="text-[11px] text-zinc-400 text-center sm:text-left pt-2">
              📦 Envio imediato para todo o Brasil com código de rastreio.
            </p>

            <ShippingCalculator />
          </div>

        </div>

      </div>
    </main>
  );
};