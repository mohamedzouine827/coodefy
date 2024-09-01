"use client"
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import from next/navigation

export default function Navbar({ pricingRef, howToRef, socialsRef }) {
  const pathname = usePathname(); // Get the current pathname
  const isCreateRoute = pathname === '/create';

  const handleScrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToHowTo = () => {
    howToRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToSocials = () => {
    socialsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full flex flex-row justify-between 2xl:max-w-[1312px] 2xl:px-[304px] xxl:px-[90px] py-[16px] lg:px-[90px] md:px-[72px] ph:px-[16px] items-center'>
      <Link href="/"><Logo /></Link>
      {!isCreateRoute && (
        <ul className="text-[#A1A1AA] text-[16px] font-medium flex flex-row gap-[64px] invisible lg:visible">
          <li onClick={handleScrollToHowTo} className="cursor-pointer hover:text-[#d0d0d4] duration-200 transition-all ease-in-out">
            How To Use
          </li>
          <li onClick={handleScrollToPricing} className="cursor-pointer hover:text-[#d0d0d4] duration-200 transition-all ease-in-out">
            Pricing
          </li>
          <li onClick={handleScrollToSocials} className="cursor-pointer hover:text-[#d0d0d4] duration-200 transition-all ease-in-out">
            Socials
          </li>
        </ul>
      )}
      <Link href="/create">
        <button className='text-[#fafafa] bg-[#18181B] hover:bg-[#E4E4E7] hover:text-[#18181B] duration-300 transition-all ease-in-out py-[12px] px-[24px] rounded-[9px]'>
          Create
        </button>
      </Link>
    </div>
  );
}
