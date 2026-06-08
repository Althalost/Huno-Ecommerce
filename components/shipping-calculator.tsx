"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export const ShippingCalculator = () => {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<any[]>([]);

  const handleCalculate = async () => {
    if (cep.length !== 8) return;
    setLoading(true);
    
    try {
      const response = await fetch("/api/shipping", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cep }),
      });

      if (!response.ok) throw new Error("Erro ao calcular");

      const data = await response.json();
      setOptions(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mt-6 pt-6 border-t border-zinc-200">
      <span className="text-sm font-semibold tracking-tight text-zinc-900 block mb-3">
        Calcular Frete e Prazo
      </span>
      
      <div className="flex gap-3">
        <input
          type="text"
          maxLength={8}
          placeholder="00000000"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
          className="flex-1 px-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-950 transition-all"
        />
        <Button 
          onClick={handleCalculate}
          disabled={loading || cep.length !== 8}
          variant="default"
        >
          {loading ? "..." : "Calcular"}
        </Button>
      </div>

      {options.length > 0 && (
        <div className="mt-4 space-y-2">
          {options.map((option) => (
            <div key={option.id} className="flex justify-between items-center text-sm p-3 rounded-md bg-zinc-50 border border-zinc-100">
              <div>
                <p className="font-medium text-zinc-900">{option.name}</p>
                <p className="text-zinc-500 text-xs">Até {option.delivery_time} dias úteis</p>
              </div>
              <span className="font-semibold text-zinc-900">
                R$ {option.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};