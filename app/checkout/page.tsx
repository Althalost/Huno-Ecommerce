"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store"
import { checkoutAction } from "./checkout-action";

export default function checkoutPage() {
    const { items, removeItem, addItem, clearCart  } = useCartStore();

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (total === 0 || items.length === 0) {
        return <div><h1> O seu Carrinho Está Vazio. </h1></div>
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Finalização da Compra</h1>
            <Card className="max-w-md mx-auto mb-8">
                <CardHeader>
                    <CardTitle className="text-xl font-bold"> Resumo do pedido </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {items.map((item) => (
                            <li key={item.id} className="flex flex-col gap-2 border-b pb-2">
                                <div className="flex justify-between">
                                    <span className="font-medium"> {item.name} </span>
                                    <span className="font-semibold"> R${(item.price * item.quantity / 100).toFixed(2)} </span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>-</Button>
                                    <span className="text-lg font-semibold"> {item.quantity} </span>
                                    <Button variant="outline" size="sm" onClick={() => addItem({ ...item, quantity: 1})}>+</Button> 
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 border-t pt-2 text-lg font-semibold">
                        Total: R$ {(total / 100).toFixed(2)}
                    </div>
                </CardContent>
            </Card>
            <form action={checkoutAction} className="max-w-md mx-auto">
                <input type="hidden" name="items" value={JSON.stringify(items)} />
                <Button variant="default" className="w-full h-12"> 
                    Ir para o pagamento 
                </Button>
                <Button variant="outline" className="w-full h-12 mt-3" onClick={() => clearCart()}>
                    Limpar Carrinho
                </Button>
            </form>
        </div>
    );
}