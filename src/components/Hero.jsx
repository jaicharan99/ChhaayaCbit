"use client"

import { motion } from "framer-motion"
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});
import { Quando } from "next/font/google";

const quando = Quando({
  weight: "400",
  subsets: ["latin"],
});


export default function Hero() {
  return (
    <section className="h-screen bg-black text-white flex flex-col items-center justify-center text-center">

      <motion.h1
      initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
  className={`
    ${playfair.className}
    text-5xl md:text-7xl lg:text-8xl
    font-bold
    tracking-wide
    text-white
  `}
>
  CHHAAYA 2026
</motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ delay: 0.5 }}
        className={`
    ${quando.className}
    text-gray-600
    text-xl md:text-2xl
    tracking-[0.3em]
    mt-3.5
  `}
        
      >
        Lights • Camera • Action
      </motion.p>

      <button
  onClick={() =>
    document.getElementById("events").scrollIntoView({
      behavior: "smooth",
    })
  }
  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold mt-10"
>
  Register Now
</button>


    </section>
  )
}

