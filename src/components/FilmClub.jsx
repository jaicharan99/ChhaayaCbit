"use client"

import { motion } from "framer-motion"

const movies = [
  "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
  "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  "https://image.tmdb.org/t/p/w500/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
  "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
  "https://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
  "https://image.tmdb.org/t/p/w500/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
  "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"
]

export default function FilmClub() {
  return (
    <section id="club" className="bg-black text-white py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        🎞 Film Club Screenings
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            whileHover={{ scale: 1.08 }}
            className="rounded-xl shadow-lg cursor-pointer"
          />
        ))}
      </div>

    </section>
  )
}
