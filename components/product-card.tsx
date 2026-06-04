import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Props {
    product: Stripe.Product;
}

export const ProductCard = ({product}: Props) => {

    const price = product.default_price as Stripe.Price;

    return (
        <div>
            <Link href={"/products/1"}>
                <Card>
                    {product.images && product.images[0] && (
                        <div className="relative h-80 w-full">
                            <Image 
                                src={product.images[0]} 
                                alt={product.name}
                                fill
                                className="object-cover transition-opacity duration-500 ease-in-out"
                            />
                        </div>
                    )}

                    <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                        <CardContent>
                            {price && price.unit_amount && (
                            <p className="text-xl text-white">
                                R$ {(price.unit_amount / 100).toFixed(2)}
                            </p>
                            )}
                        </CardContent>
                    </CardHeader>
                </Card>
            </Link>
        </div>
    );
};