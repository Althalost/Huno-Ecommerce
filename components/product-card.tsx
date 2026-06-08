import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface Props {
    product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
    const price = product.default_price as Stripe.Price;

    return (
        <Link href={`/products/${product.id}`} className="block h-full group">
            <Card className="h-full flex flex-col overflow-hidden border border-zinc-150 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                
                {product.images && product.images[0] && (
                    <div className="relative w-full aspect-square overflow-hidden bg-zinc-50 border-b border-zinc-100 shrink-0">
                        <Image 
                            src={product.images[0]} 
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            loading="eager"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                    </div>
                )}

                <div className="flex flex-col grow p-4 gap-2">
                    
                    <CardHeader className="p-0">
                        <CardTitle className="text-base font-bold tracking-tight text-zinc-900 line-clamp-2 min-h-11 leading-snug">
                            {product.name}
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 grow">
                        {product.description && (
                            <p className="text-zinc-500 text-xs line-clamp-2 leading-relaxed">
                                {product.description}
                            </p>
                        )}
                    </CardContent>
                    
                </div>

                <CardFooter className="p-4 pt-0 flex items-center justify-between mt-auto">
                    {price && price.unit_amount && (
                        <p className="text-base font-bold text-zinc-950">
                            R$ {(price.unit_amount / 100).toFixed(2)}
                        </p>
                    )}
                    
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-black transition-colors duration-300 flex items-center gap-1">
                        Ver mais <span>→</span>
                    </span>
                </CardFooter>
            </Card>
        </Link>
    );
};