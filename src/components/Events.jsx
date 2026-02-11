"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Events() {
  
  // ✅ ADD STATE (this was missing)
  const [selectedEvent, setSelectedEvent] = useState(null);
   
  const events = [
    {
      title: "Short Film Contest",
      desc: "Showcase your creativity on the big screen.",
      image: "/events/sfc1.png",
      details: "Submit your short films and compete with the best creators.  10,000/- for First Prize.5000/- each for Second & Third Prizes.   Registrations closes on 18TH FEB",
      date: "21th FEB",
      venue: "CBIT",
      fee: "₹251",
      form:"https://docs.google.com/forms/d/e/1FAIpQLSfSZPwTu4AP2etxroEi6stgAG9oaQZXy0hR7Y2lzpPiqdSImA/viewform"
    },
    {
      title: "Cosplay",
      desc: "Dress up like your favorite stars.",
      image: "/events/cosplay1.png",
      details: "Dress up as your favorite movie, anime, or pop-culture character.   Show your style, confidence, and steal the spotlight on stage. ₹5000 for First Prize & ₹2500 for Second Prize.  Registrations closes on 18TH FEB",
      date: "19th FEB",
      venue: "CBIT",
      fee: "₹61 for person",
      form:"https://docs.google.com/forms/d/e/1FAIpQLSfrLs0BdZlWx-h8QJ1IF_3g93rZBuyDMLN3DUCRdpADzq7NKQ/viewform"
      
    },
    {
      title: "Nukkad Naatak",
      desc: "Raw street theaters",
      image: "/events/images.png",
      details: "No stage, no lights — just passion and performance.Turning the streets into theatre and move the audience with your story.",
      date: "20th FEB",
      venue: "CBIT",
      fee: "Free",
    },
  ];

  return (
    <section id="events" className="bg-gray-950 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        🎟 Shruthi Events
      </h2>

      {/* ================= GRID ================= */}
      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedEvent(event)} // ✅ CLICK TO OPEN
            className="cursor-pointer bg-gray-900 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-400">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedEvent.image}
              alt=""
              width={600}
              height={400}
              className="w-full h-66 object-cover"
            />

            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-red-500">
                {selectedEvent.title}
              </h3>

              <p className="text-gray-300 whitespace-pre-line leading-relaxed text-sm">
  {selectedEvent.details}
</p>


              <div className="text-sm text-gray-400 space-y-1">
                <p>📅 Date: {selectedEvent.date}</p>
                <p>📍 Venue: {selectedEvent.venue}</p>
                <p>💰 Fee: {selectedEvent.fee}</p>
                
              </div>

              {selectedEvent.form && (
  <a
    href={selectedEvent.form}
    target="_blank"
    className="block text-center w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold"
  >
    Register Now
  </a>
)}

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
