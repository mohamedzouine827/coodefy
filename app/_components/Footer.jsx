import React from 'react'
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { FaGithub, FaBehance } from "react-icons/fa";
import Logo from './Logo';


export default function Footer() {
  const links = [
    {
      id: 1,
      link : "https://www.linkedin.com/in/mohamed-zouine-01aab6281/",
      comp : TiSocialLinkedin
    },
    {
      id : 2,
      link : "https://x.com/mux0001",
      comp : TiSocialTwitter
    },
    {
      id : 3,
      link : "https://github.com/mohamedzouine827",
      comp : FaGithub
    },
    {
      id : 4,
      link : "https://www.behance.net/khalidzouine",
      comp : FaBehance
    }
  ];


  return (
    <div className="w-full 2xl:max-w-[1350px] md:px-[72px] lg:px-[90px] px-[90px] ph:px-[16px] py-24 flex-col justify-start items-start gap-16 inline-flex">
      <div className=" w-full justify-between items-center gap-8 md:gap-0 flex md:flex-row flex-col">
        <Logo />
        <div className="text-center text-[#d9d9d9] text-base font-medium  leading-normal">All Rights Reserved ©</div>
      </div>
      <div className="w-full justify-center md:justify-between items-center flex">
        <div className="justify-start items-center gap-16 hidden md:flex">
          <div className="text-zinc-400 text-base font-medium  leading-normal">How To Use</div>
          <div className="text-zinc-400 text-base font-medium   leading-normal">Pricing</div>
          <div className="text-zinc-400 text-base font-medium  leading-normal">Create</div>
        </div>
        <div className="justify-start  items-start gap-16 hidden md:flex">
          {links.map((link) => {
          const IconComponent = link.comp;
          return (
            <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer">
              <IconComponent className='w-[24px] h-[24px] cursor-pointer' color='white' />
            </a>
          );
        })}
        </div>
      </div>
    </div>
  )
}
