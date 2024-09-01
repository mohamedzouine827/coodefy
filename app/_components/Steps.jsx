import Image from 'next/image'
import React from 'react'


export default function Steps() {
  return (
    <section className='2xl:max-w-[1400px] xl:px-[90px] flex flex-col justify-center items-center xxl:px-[90px] px-4 lg:px-[90px] md:px-[90px] gap-[48px]'>
        <div className='text-white flex flex-col md:flex-row gap-8 items-center justify-between w-full'>
          <div className='flex flex-col gap-8 w-full md:w-1/2'>
            <h1 className='md:text-[32px] leading-[48px] font-medium text-[24px] md:text-start text-center'>
              Step #1
            </h1>
            <span className='text-[16px] font-medium leading-6 text-[#D4D4D8] md:text-start text-center'>
              Paste the code that you want to generate a code snippet for
            </span>
          </div>
          <div className=' w-[250px] h-[250px]  md:w-[450px] md:h-[450px] justify-center items-center flex'>
            <Image src="/pastecode.png" alt="code" width={1920} height={1920} className='w-fit h-fit'  />
          </div>
        </div>
        <div className='text-white flex flex-col md:flex-row gap-8 items-center justify-between w-full'>
          <div className='flex flex-col gap-8 w-full md:w-1/2'>
            <h1 className='md:text-[32px] leading-[48px] font-medium text-[24px] md:text-start text-center'>
              Step #2
            </h1>
            <span className='text-[16px] font-medium leading-6 text-[#D4D4D8] md:text-start text-center'>
            Select the programming language that your code are written with
            </span>
          </div>
          <div className=' w-[250px] h-[250px]  md:w-[450px] md:h-[450px] justify-center items-center flex'>
            <Image src="/pasted.png" alt="code" width={1920} height={1920} className='w-fit h-fit'  />
          </div>
        </div>
        <div className='text-white flex flex-col md:flex-row gap-8 items-center justify-between w-full'>
          <div className='flex flex-col gap-8 w-full md:w-1/2'>
            <h1 className='md:text-[32px] leading-[48px] font-medium text-[24px] md:text-start text-center'>
              Step #3
            </h1>
            <span className='text-[16px] font-medium leading-6 text-[#D4D4D8] md:text-start text-center'>
            change your background or leave it in the default value
            </span>
          </div>
          <div className=' w-[250px] h-[250px]  md:w-[450px] md:h-[450px] justify-center items-center flex'>
            <Image src="/changebg.png" alt="code" width={1920} height={1920} className='w-fit h-fit'  />
          </div>
        </div>
        <div className='text-white flex flex-col md:flex-row gap-8 items-center justify-between w-full'>
          <div className='flex flex-col gap-8 w-full md:w-1/2'>
            <h1 className='md:text-[32px] leading-[48px] font-medium text-[24px] md:text-start text-center'>
              Step #4
            </h1>
            <span className='text-[16px] font-medium leading-6 text-[#D4D4D8] md:text-start text-center'>
            export the image and enjoy
            </span>
          </div>
          <div className=' w-[250px] h-[250px]  md:w-[450px] md:h-[450px] justify-center items-center flex'>
            <Image src="/code.png" alt="code" width={1920} height={1920} className='w-fit h-fit'  />
          </div>
        </div>
    </section>
  )
}
