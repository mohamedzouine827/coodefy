"use client"
import React, { useRef } from 'react';
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import HowTo from "./_components/HowTo";
import Pricing from "./_components/Pricing";
import Socials from "./_components/Socials";
import Footer from "./_components/Footer";

export default function Home() {
  const pricingRef = useRef(null);
  const howToRef = useRef(null);
  const socialsRef = useRef(null);

  return (
    <div className="bg-[#09090B] flex flex-col justify-center items-center ">
      <Navbar pricingRef={pricingRef} howToRef={howToRef} socialsRef={socialsRef} />
      <HeroSection pricingRef={pricingRef} />
      <HowTo ref={howToRef} />
      <Pricing ref={pricingRef} />
      <Socials ref={socialsRef} />
      <Footer />
    </div>
  );
}
