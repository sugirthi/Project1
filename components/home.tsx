import React from 'react'
import Image from 'next/image';

export const Homepage = () => {
  return (
    <>
      <div className='h-screen flex items-center justify-center bg-gradient-to-r from-[#351C75] via-gray-200 to-[#351c75] bg-pulse'>
        <Image src="/image/abluva2.png" alt="Logo" width={500} height={500} className='slide-up' />
      </div>
      <div>
        <section className="bg-[url('/image/section1.jpg')] bg-cover bg-fixed bg-no-repeat sec">
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ml-4 sm:ml-8 md:ml-12 lg:ml-20 xl:ml-28 text-justify text-white flex justify-center items-center h-screen rounded-2xl font-bold animate-pulse">ABLUVA</p>
          <p className="bg-gradient-to-t from-white from-99% to-gray-300 to-1% m-4 sm:m-8 md:m-12 lg:m-20 xl:m-28 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl custom-shadow text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-justify text-[#351c75] flex justify-center items-center italic font-serif slide-in">AI powered Data security Company, a leading provider of comprehensive data security solutions. At Abluva, we understand the critical importance of safeguarding your valuable information in today's digital landscape. With our cutting-edge technologies and expert team, we are committed to ensuring the highest level of protection for your data assets.
          </p>
        </section>
      </div>
    </>
  )
}

