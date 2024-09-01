import React, { forwardRef } from 'react';
import GitLogo from '../_assets/GitLogo';
import Link from 'next/link';

const Pricing = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="2xl:max-w-[1344px] lg:px-[90px] ph:px-[16px] md:px-[72px] px-4 py-24 flex-col justify-start items-center gap-12 inline-flex">
      <div className="flex-col justify-start items-center gap-8 flex">
        <div className="text-center text-white text-[32px] font-semibold leading-[48px]">Pricing</div>
        <div className="text-center text-[#d9d9d9] text-xl font-medium leading-7">
          No complicated setups, no hidden fees—just pure functionality at your fingertips. Whether you&apos;re a developer looking to showcase your work or a student trying to make sense of a new concept, our platform delivers clean, ready-to-use snippets in seconds. Plus, it&apos;s completely free! If you&apos;re curious about how it all works, feel free to explore the open-source code available on GitHub. Transparency and ease of use are our top priorities, making coding more accessible for everyone.
        </div>
      </div>
      <div className="justify-start items-start gap-8 inline-flex">
        <div className="w-[135px] h-14 px-6 py-4 text-neutral-50 cursor-pointer bg-zinc-900 rounded-xl justify-center items-center hover:bg-[#E4E4E7] hover:text-[#18181B] duration-300 transition-all ease-in-out gap-2.5 flex">
          <div className=" text-base font-medium leading-normal">Create</div>
        </div>
        <Link href="https://www.linkedin.com/in/mohamed-zouine-01aab6281/">
        <div className="w-[135px] px-6 py-4 rounded-xl border border-[#898585] cursor-pointer justify-center items-center gap-2 flex">
          <GitLogo />
          <div className="text-center text-white text-base font-medium leading-normal">GitHub</div>
        </div></Link>
      </div>
    </section>
  );
});

// Set the display name for the component
Pricing.displayName = 'Pricing';

export default Pricing;
