"use client";

import React from "react";
import Image from "next/image"
import { motion } from "framer-motion"
import { HeroParallax } from "@/components/ui/hero-parallax";
import products from "@/utils/products";
import { LampContainer } from "@/components/ui/lamp";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import testimonials from "@/utils/testimonials";
import { HoverEffect } from "@/components/ui/hover-effect";

export default function Home() {
  return (
    <main>
      <Image
        src="/logo-white.png"
        alt="Logo"
        width={150}
        height={150}
        className="fixed z-[21] right-0 m-4"
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

      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={testimonials} />
      </div>

      <div className="flex flex-col align-center justify-between py-40 px-10 mx-auto max-w-6xl md:flex-row">
        <div>
          <motion.h1
            className="text-white text-4xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            Pronto para lançar seu próximo evento?
          </motion.h1>
          <motion.h2
            className="text-slate-400 mt-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            Construindo momentos, criando memórias: Seu evento, nossa expertise!
          </motion.h2>
        </div>
        <div>
          <motion.button
            className="bg-indigo-500 py-4 px-6 mt-8 rounded-lg hover:bg-indigo-400 transition-all md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
          >
            Get started a project
          </motion.button>
        </div>
      </div>

      <footer className="bg-slate-950 pb-20 pt-10 text-slate-500">
        <div className="mt-10 md:flex md:justify-between md:mx-10">
          <Image src="/logo-slate.png" alt="Quadro Eventos" width={200} height={200} />
          <div className="mx-10 mt-4 flex flex-col space-y-4 text-slate-400 md:flex-row md:space-y-0 md:space-x-4 h-fit my-auto">
            <a className="h-fit">Home</a>
            <a className="h-fit">Política de Privacidade</a>
            <a className="h-fit">Contato</a>
            <h1 className="!mt-16 text-sm md:!mt-0 md:!ml-20">Quadro Eventos<sup>Ⓒ</sup>. 2024.</h1>
          </div>
        </div>
      </footer>
    </main>
  )
}

