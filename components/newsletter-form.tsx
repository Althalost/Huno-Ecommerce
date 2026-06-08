"use client";

import { useState } from "react";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <div className="pt-4 text-center animate-fade-in">
        <p className="text-emerald-400 text-sm md:text-base font-bold bg-emerald-950/30 border border-emerald-500/20 px-6 py-3 rounded-full">
          ✨ Obrigado por se juntar ao club! Verifique seu e-mail.
        </p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubscribe} 
      className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-md mx-auto px-2"
    >
      <input 
        type="email" 
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu melhor e-mail" 
        className="w-full sm:flex-1 h-11 px-5 text-sm bg-white/10 border border-white/20 rounded-full text-white placeholder-zinc-400 focus:outline-none focus:border-white transition-colors"
      />
      <button 
        type="submit"
        className="w-full sm:w-auto h-11 px-6 bg-white text-zinc-950 hover:bg-zinc-100 rounded-full font-bold uppercase tracking-wider text-xs transition-transform hover:scale-[1.02] shadow-md shrink-0 cursor-pointer"
      >
        Unir-se ao club
      </button>
    </form>
  );
};