"use client"
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from './_components/Footer'
import { useSelector } from "react-redux";

export default function Home() {
  const isDarkMode = useSelector((content) => content.ui.isDarkMode);
  return (
   
   <div className= {`${isDarkMode ? "dark" : ""} dark:bg-gray-600`}>
     <Header/>
    <Hero/>
    <Footer />
   </div>
  );
}
