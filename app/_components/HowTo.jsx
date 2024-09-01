import React, { forwardRef } from 'react';
import Steps from './Steps';

const HowTo = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='w-full py-24 bg-[#1A1A1C] flex justify-center flex-col items-center gap-16'>
      <h1 className='text-white ph:text-[24px] font-semibold md:text-[32px]'>
        How To Use Coodify
      </h1>
      <Steps />
    </section>
  );
});

HowTo.displayName = 'HowTo';

export default HowTo;
