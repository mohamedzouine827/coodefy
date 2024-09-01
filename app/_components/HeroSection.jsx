import Link from 'next/link';
import React from 'react';

export default function HeroSection({ pricingRef }) {
    const scrollToPricing = () => {
        pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className='flex flex-col py-[96px] justify-center items-center gap-[48px] w-full 2xl:max-w-[1312px] 2xl:px-[90px] xxl:px-[90px] xl:px-[90px] lg:px-[90px] md:px-[72px] '>
            <div className=' w-full flex flex-col gap-[32px] justify-center items-center'>
                <h1 className='  h-full text-white text-center font-semibold text-[64px] leading-[72px]'>
                    Transform Your Code into <span className='bg-gradient-to-b  from-[#020024] via-[#090979] to-[#00D4FF] inline-block text-transparent bg-clip-text'>
                        Stunning Visuals
                    </span>
                </h1>
                <h2 className='text-[20px]  font-semibold text-[#a1a1aa] text-center leadding-[28px]'>
                    Easily convert your code into beautifully styled images. Perfect for sharing on social media, enhancing presentations, or documenting your work.
                </h2>
            </div>
            <div className="h-14 justify-start items-start gap-8 inline-flex">
                <Link href="/create">
                <button className="h-14 px-6 text-white w-[166px] py-4 bg-zinc-900 rounded-[9px] justify-center items-center gap-2.5 flex hover:bg-[#E4E4E7] hover:text-[#18181B] duration-300 transition-all ease-in-out">
                    <div className="text-center  text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Create Snippet</div>
                </button>
                </Link>
                <button
                    onClick={scrollToPricing}
                    className="h-14 w-[166px] text-white hover:text-[#D4D4D8] px-6 py-4 rounded-[9px] border border-white hover:border-[#D4D4D8] justify-center items-center gap-2.5 flex duration-300 transition-all ease-in-out"
                >
                    <div className="text-center text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Pricing</div>
                </button>
            </div>
        </section>
    );
}
