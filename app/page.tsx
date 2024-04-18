"use client";

import React from "react";
import Image from "next/image"
import { motion } from "framer-motion"
import { HeroParallax } from "@/components/ui/hero-parallax";
import products from "@/utils/products";
import { LampContainer } from "@/components/ui/lamp";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import testimonials from "@/utils/testimonials";

export default function Home() {
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

      <div className="h-80 w-full bg-gradient-to-t from-slate-950 to-black to-60%" />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Onde a magia <br /> acontece
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-2 bg-slate-400 py-4 bg-clip-text text-center tracking-tight text-transparent md:text-2xl"
        >
          Transformando ideias em eventos que encantam e inspiram
        </motion.p>
      </LampContainer>

      <div className="min-h-screen w-full bg-slate-950">
        <ParallaxScroll images={products.map(item => item.thumbnail)} />
      </div>
      <div className="h-40 w-full bg-gradient-to-b from-slate-950 to-black to-60%" />

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
        />
      </div>
    </main>
  )
}

