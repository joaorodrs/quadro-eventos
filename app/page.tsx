"use client";

import React from "react";
import Image from "next/image"
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return (
    <main>
      <Image
        src="/93-logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="fixed z-10"
      />
      <HeroParallax products={products} />
    </main>
  )
}

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.29350-15/409654905_1418409202109929_1268462918659444340_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=ZGdEot_TOi4Ab56o5uV&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1NjQwNjk3OTM0ODEzNTcwOA%3D%3D.2-ccb7-5&oh=00_AfDAKj_GnuGPfou9mypPzbQeKlZOwlidx_0foQfHKKwP0A&oe=6621035A&_nc_sid=10d13b",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.29350-15/337295522_247805227671738_3035196517494992933_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDY2eDcxMS5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=-m7xdmgLPeIAb4E6vpQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA2NTEwMDg0MDg1MDU2NDQ5Ng%3D%3D.2-ccb7-5&oh=00_AfBRJ11dubVFhCV2NLW5VUmOgHMZZ0sTUpoLUPr-VrKe3w&oe=662103CC&_nc_sid=10d13b",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.29350-15/329122311_960436568702244_4021093985471730552_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDY2eDcxMS5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=4SDeVSNg0XMAb599I_m&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzAzMjQzODIxMjM3MDMzNTI0Mg%3D%3D.2-ccb7-5&oh=00_AfCn0t3msKY_TNf7K9q2RoG4L5X3RZv2iYf3IcpBq-fMJg&oe=66211899&_nc_sid=10d13b",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.29350-15/404889119_1531097414331239_7974225670046192075_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=zhlicE0rHKYAb4DJgEv&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0NjI1MjYwODgyNDI2NTI0MQ%3D%3D.2-ccb7-5&oh=00_AfD33E2y31cc6UyvJgtw2fGkwiFuMH3JjloTYRqR9jQyoA&oe=662102E0&_nc_sid=10d13b",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.29350-15/410193481_671025131883411_6342374935026715105_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=11QVPcReVZoAb5kD5ON&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1NjQwNjk3OTM2NDc4NDI0NQ%3D%3D.2-ccb7-5&oh=00_AfC8m-x_2NFjWDKCP6nDHkKKagDs5HMvVr3jMUEAMtCGyA&oe=662121AF&_nc_sid=10d13b",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t39.30808-6/384471745_17877950330959879_5649757752403862800_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDY2eDcxMC5zZHIuZjMwODA4In0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=ZwdsdHQOIfwAb6iHOr4&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIwMzU2ODIwNTA5MTU4NzM0OA%3D%3D.2-ccb7-5&oh=00_AfAomfbY1ftq2oeevqnS7AQqwlwIJfbD8BB-olCW8vBXtQ&oe=66210F35&_nc_sid=10d13b",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t39.30808-6/384800531_17877965078959879_2959626210283486115_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDY2eDcxMC5zZHIuZjMwODA4In0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=cFcRJG-pepYAb78RiYE&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIwMzY1NTE3NTE1MDk3MzQwNA%3D%3D.2-ccb7-5&oh=00_AfCWw6lrFGuj_Wu0JvJ8X1ZE1_aDT5SBgq15SGlbtg76fw&oe=66212E12&_nc_sid=10d13b",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t39.30808-6/384447769_17878069889959879_8111935885666958130_n.jpg?se=7&stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDY2eDcxMC5zZHIuZjMwODA4In0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=52ONkelQqogAb6Ogle2&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIwNDA2OTQ4NDIzODc4NTk4OQ%3D%3D.2-ccb7-5&oh=00_AfDIBwIsdo57JOc03SEqtxJsP-XdTueQ0bkEjX5xUbpqtQ&oe=66212EA0&_nc_sid=10d13b",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.29350-15/409841108_178950155305420_692973688159734199_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=fICpaKVk_68Ab7DQeL1&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1NjQwNjk3OTM0ODE3OTU1OA%3D%3D.2-ccb7-5&oh=00_AfDCRcN9KyRWaMsKvZ3fmqYiRF-CqXCExPdiCz6BJZHdoA&oe=66210C98&_nc_sid=10d13b",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t39.30808-6/385253912_17878063736959879_3392139157006471445_n.jpg?se=7&stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDY2eDcxMC5zZHIuZjMwODA4In0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=XFeuqNN5A2UAb7QX141&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIwNDA1MTQxNDE2MjIzNTA4NA%3D%3D.2-ccb7-5&oh=00_AfCYhr0i0sD6jgYKkJcEootqR_2-E42AE8yj7Vh2ahLGMg&oe=66212035&_nc_sid=10d13b",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.29350-15/400119639_903426687974015_7352426730609794931_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=2DdryuQqyLgAb63pL72&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMTY3NDU1ODU4NTI1NDg2MQ%3D%3D.2-ccb7-5&oh=00_AfD8QebjlJ8i-pjSJq4BtWvS_Rju4drpDGtVe7sPCIHs_Q&oe=6621126E&_nc_sid=10d13b",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.29350-15/400119639_903426687974015_7352426730609794931_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=2DdryuQqyLgAb63pL72&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMTY3NDU1ODU4NTI1NDg2MQ%3D%3D.2-ccb7-5&oh=00_AfD8QebjlJ8i-pjSJq4BtWvS_Rju4drpDGtVe7sPCIHs_Q&oe=6621126E&_nc_sid=10d13b",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t39.30808-6/385267522_17878073501959879_4052820116065863671_n.jpg?se=7&stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDY2eDcxMC5zZHIuZjMwODA4In0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=VWZjraofLX8Ab570ssO&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIwNDA3Njg0NTQwMTc1MjEwNw%3D%3D.2-ccb7-5&oh=00_AfDhQquw5nIRSAYmhpT68y1r-VbU1krmPAWeKAffMBY_EA&oe=66210F9E&_nc_sid=10d13b",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.29350-15/409917520_391561503202217_3062134744254710344_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=8vS6GEaheDkAb6X3Tx5&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1NjQwNjk3OTMzMTQ4OTQ1MQ%3D%3D.2-ccb7-5&oh=00_AfCclo-e3NAtCrTXSuVMV4VUh75d7_QHk5UwkQj14Q-tAQ&oe=6621052C&_nc_sid=10d13b",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t39.30808-6/399011239_18394299724015986_4443248518155861014_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=lCk5Br3lIcgAb5cDuCP&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIyOTc1NDU1MTM3MjAwNTQ2Nw%3D%3D.2-ccb7-5&oh=00_AfDYclvJ-GAF4yZLpX0-FDUdUK3GeNfqxArDs5efWhN0jg&oe=661F10F6&_nc_sid=10d13b",
  },
];
