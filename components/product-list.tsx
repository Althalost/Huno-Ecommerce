import Stripe from "stripe";
import { ProductCard } from "./product-card";
import { Key } from "lucide-react";

interface Props {
    products: Stripe.Product[];
}

export const ProductList = ({products}: Props) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="O que você está procurando?"/>
            </div>

            <ul>
                {products.map((product, key) => {
                    return (
                        <li key={key}> 
                            <ProductCard product={product}/>
                        </li>);
                })}
            </ul>
        </div>
    );
};