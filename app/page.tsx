"use client";

import React from "react";
import Image from "next/image"
import { HeroParallax } from "@/components/ui/hero-parallax";
import products from "@/utils/products";

export default function HeroParallaxDemo() {
  return (
    <main>
      <Image
        src="/logo-white.png"
        alt="Logo"
        width={150}
        height={150}
        className="fixed z-10 right-0 m-4"
      />

      <HeroParallax products={products} />

      <div className="w-full mt-20 h-[60vh] relative bg-[url('https://upandup.agency/wp-content/uploads/2024/03/Cinematography-Sound-64-1024x682.jpg')]">
        <div className="size-full bg-black/50 flex flex-col align-center justify-center">
          <h1 className="text-2xl font-bold mx-4 w-fit h-fit">A agência que irá elevar o nível de seus eventos</h1>
          <h2 className="mt-2 mx-4 w-fit h-fit">Do conceito à execução, nós transformamos sua visão em eventos extraordinários.</h2>
        </div>
      </div>
    </main>
  )
}

