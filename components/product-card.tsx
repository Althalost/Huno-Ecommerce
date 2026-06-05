import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface Props {
    product: Stripe.Product;
}

export const ProductCard = ({product}: Props) => {

    const price = product.default_price as Stripe.Price;

    return (
            <Link href={`/products/${product.id}`} className="block h-full">
                <Card className="group hover:shadow-2xl transition justify-between duration-300 py-0 h-full flex-col border-gray-300 gap-0">
                    {product.images && product.images[0] && (
                        <div className="relative h-80 w-full">
                            <Image 
                                src={product.images[0]} 
                                alt={product.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                loading="eager"
                                className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg object-cover object-[center_10%]"
                            />
                        </div>
                    )}

                    <CardHeader className="p-4">
                        <CardTitle className="text-xl font-bold line-clamp-2 h-14 text-gray-800">
                            {product.name}
                        </CardTitle>
                        <CardContent className="p-4 flex-grow flex flex-col justify-between">
                            {product.description && (
                                <p className="text-gray-600 text-sm mb-2 line-clamp-2 overflow-hidden">{product.description}</p>
                            )}
                            {price && price.unit_amount && (
                            <p className="text-xl font-semibold text-gray-900">
                                R$ {(price.unit_amount / 100).toFixed(2)}
                            </p>
                            )}
                            <Button className="mt-auto bg-black text-white"> 
                                Mais detalhes 
                            </Button>
                        </CardContent>
                    </CardHeader>
                </Card>
            </Link>
    );
};