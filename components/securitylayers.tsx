import React from 'react'
import Image from 'next/image'

export const SecurityLayers = () => {
  return (
    <div className="bg-[url('/image/section1.jpg')]">
      <div>
        <p className='text-center text-6xl text-white pt-20 font-bold'>What Special About Us?</p>
        <div className='bg-gray-300 rounded-2xl p-5 mt-20 mx-60 custom-shadow'>
          <p className='text-center text-4xl text-[#351C75] font-bold'>Multi-layered approach to security </p>
        </div>
      </div>
      <section className='securitylayer-section'>
        <Image src="/image/1layer.png" id="layer1" alt="image" width={250} height={250} className='image' />
        <Image src="/image/2layer.png" id="layer2" alt="image" width={250} height={250} className='image' />
        <Image src="/image/3layer.png" id="layer3" alt="image" width={250} height={250} className='image' />
        <Image src="/image/4layer.png" id="layer4" alt="image" width={250} height={250} className='image' />
        <Image src="/image/5layer.png" id="layer5" alt="image" width={350} height={350} className='image' />
      </section>
    </div>
  )
}
