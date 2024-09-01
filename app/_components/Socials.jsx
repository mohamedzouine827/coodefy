import React, { forwardRef } from 'react';
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { FaGithub, FaBehance } from "react-icons/fa";

const Socials = forwardRef((props, ref) => {

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
    <section ref={ref} className="w-full px-[90px] py-24 bg-[#1a1a1c] flex-col justify-start items-center gap-12 flex">
      <div className="flex-col justify-start items-center gap-8 flex">
        <div className="text-white text-[32px] font-semibold leading-[48px]">Socials</div>
        <div className="text-center text-[#d9d9d9] text-xl font-medium leading-7">
          Make sure to stay in touch with us to explore the next product that may help you in the future.
        </div>
      </div>
      <div className="flex justify-center items-center gap-16 overflow-visible">
        {links.map((link) => {
          const IconComponent = link.comp;
          return (
            <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer">
              <IconComponent className='w-[32px] h-[32px] cursor-pointer' color='white' />
            </a>
          );
        })}
      </div>
    </section>
  );
});

Socials.displayName = 'Socials';

export default Socials;
