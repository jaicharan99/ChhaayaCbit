"use client"
import Image from "next/image"


export default function Navbar() {
  return (

    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">
      <div className="w-17 h-17 rounded-full overflow-hidden bg-black flex items-center justify-center">
  <Image
    src="/chhaaya.jpg"
    alt="logo"
    width={80}
    height={80}
  />
</div>


      </h1>

      <div className="space-x-6">
        <a href="#events" className="hover:text-red-500">Events</a>
        <a href="#about" className="hover:text-red-500">Film Club</a>
        <a href="#events" className="hover:text-red-500">Register</a>
      </div>

    </nav>
  )
}
