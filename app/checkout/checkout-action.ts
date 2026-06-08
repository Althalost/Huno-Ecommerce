"use server";

import { stripe } from "@/lib/stripe";
import { CartItem } from "@/store/cart-store";
import { redirect } from "next/navigation";

export const checkoutAction = async (formData: FormData): Promise<void> => {

    const itemsJson = formData.get("items") as string;
    const items = JSON.parse(itemsJson);
    
    const line_items = items.map((item: CartItem) => ({
        price_data: {
            currency: 'brl',
            product_data: {
                name: `${item.name} (Tamanho: ${item.size})`,
                images: item.imageUrl ? [item.imageUrl] : [],
            },
            unit_amount: item.price,
        },
        quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
        currency: 'brl',
        payment_method_types: ['card'],
        shipping_address_collection: { allowed_countries: ['BR'] },
        line_items,
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
        metadata: {
            resumen_pedido: items.map((item: CartItem) => `${item.name} [${item.size}] x${item.quantity}`).join(", ")
        }
    });

    redirect(session.url!);
};