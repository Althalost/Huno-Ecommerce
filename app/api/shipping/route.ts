import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { cep } = await request.json();

    if (!cep || cep.length !== 8) {
      return NextResponse.json({ error: "CEP inválido" }, { status: 400 });
    }

    const url = "https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate";
    
    const melhorenvioResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.MELHOR_ENVIO_TOKEN}`,
        "User-Agent": "E-commerce HUNO Portfolio (tu_email_real@gmail.com)", 
      },
      body: JSON.stringify({
        from: {
          postal_code: process.env.CEP_ORIGEM,
        },
        to: {
          postal_code: cep,
        },

        products: [
          {
            id: "x",
            width: 20,
            height: 10,
            length: 20, 
            weight: 0.5,
            insurance_value: 100.0, 
            quantity: 1,
          },
        ],
      }),
    });

    if (!melhorenvioResponse.ok) {
      throw new Error("Error en la API de Melhor Envio");
    }

    const data = await melhorenvioResponse.json();

    const options = data
      .filter((service: any) => !service.error)
      .map((service: any) => ({
        id: service.id.toString(),
        name: service.name, 
        price: parseFloat(service.price),
        delivery_time: service.custom_delivery_time,
      }));

    return NextResponse.json(options);
  } catch (error) {
    console.error("Shipping calculation error:", error);
    return NextResponse.json({ error: "Erro ao calcular frete" }, { status: 500 });
  }
}