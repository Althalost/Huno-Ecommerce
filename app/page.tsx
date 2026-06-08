import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  console.log(products);
  return (<div>
      <section className="relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden bg-zinc-950 shadow-sm">
  
  <Image
    src="/img/mike-von-bWUOx0SAsAk-unsplash.jpg"
    alt="Hero Image"
    fill
    priority
    className="object-cover object-center select-none pointer-events-none z-0 opacity-85"
  />

  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/40 to-transparent md:bg-linear-to-r md:from-zinc-950/90 md:via-zinc-950/50 md:to-transparent z-10" />

  <div className="absolute inset-0 flex items-center px-8 sm:px-16 md:px-24 z-20">
    <div className="max-w-md space-y-4 text-white">
      
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none text-white drop-shadow-sm">
        Estilo sem esforço. <br className="hidden sm:inline" /> Identidade urbana.
      </h2>
      
      <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-[90%]">
        Uma curadoria exclusiva de peças essenciais projetadas para destacar sua autenticidade no dia a dia.
      </p>
      
      <div className="pt-2">
        <Button
          asChild
          variant="default"
          className="h-11 sm:h-12 px-6 bg-white text-zinc-950 hover:bg-zinc-100 rounded-full font-bold uppercase tracking-wider text-xs transition-transform hover:scale-[1.02] shadow-lg"
        >
          <Link href="/products">
            Explore todos os produtos
          </Link>
        </Button>
      </div>

    </div>
  </div>

</section>
      <section className="py-8 bg-olive-50 rounded-xl mt-3">
        <Carousel products={products.data} />
      </section>
  </div>);
}
