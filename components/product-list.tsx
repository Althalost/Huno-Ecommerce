"use client";

import Stripe from "stripe";
import { ProductCard } from "./product-card";
import { Key } from "lucide-react";
import { useState } from "react";

interface Props {
    products: Stripe.Product[];
}

export const ProductList = ({products}: Props) => {

    const [searchTerm, setSearchTerm] = useState<string>("")

    const filteredProduct = products.filter((product) => {
        const term = searchTerm.toLowerCase()
        const nameMatch = product.name.toLowerCase().includes(term)
        const descriptionMatch = product.description ? product.description.toLowerCase().includes(term) : false ;

        return nameMatch || descriptionMatch;
    })

    return (
        <div>
            <div className="mb-6 flex justify-center">
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md px-4 py-2 rounded-full border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-black focus:bg-white transition-all"
                    placeholder="O que você está procurando?"/>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {filteredProduct.map((product) => {
                    return (
                        <li key={product.id}> 
                            <ProductCard product={product}/>
                        </li>);
                })}
            </ul>
        </div>
    );
};