"use client"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Events from "../components/Events"
import Footer from "@/components/Footer";
import About from "@/components/About";

//import FilmClub from "../components/FilmClub"

export default function Home() {
  return (
    <>
      <Navbar />
    
      <Hero />
      <About/>
      <Events />
      <Footer/>
    </>
  )
}
