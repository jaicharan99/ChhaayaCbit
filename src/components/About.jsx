"use client"
import Image from "next/image";

export default function About() {
  return (
    
    <section id="about" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT — IMAGE */}
        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/events/chhaaya.jpg"   // you can change to any image
            alt="Film Club"
            fill
            className="object-cover hover:scale-110 transition duration-700"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-orange-600">
            About Film Club
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            The Film Club is a creative community of movie lovers, storytellers,
            and aspiring filmmakers. We explore the art of cinema through
            screenings, workshops, and hands-on filmmaking experiences.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            From watching classics to producing short films, we provide a space
            where students learn, collaborate, and celebrate storytelling on the
            big screen.
          </p>

          {/* FEATURES */}
          <div className="flex gap-6 text-sm">
            <span className="bg-gray-900 px-4 py-2 rounded-lg">
              🎥 Screenings
            </span>
            <span className="bg-gray-900 px-4 py-2 rounded-lg">
              🎬 Workshops
            </span>
            <span className="bg-gray-900 px-4 py-2 rounded-lg">
              🏆 Competitions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
