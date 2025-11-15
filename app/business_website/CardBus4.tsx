import React from 'react'
import Image from 'next/image'
const CardBus4 = () => {
  return (
    <div className="fixed  h-[300px] ml-10  rounded-xl">
        <Image src="/my_image2.png" alt="image" width={280} height={400}/>
        <div className=' absolute top-5 right-5  mb-[50px]'><Image src="/my_image.jpg" alt="image" width={280} height={400}/></div>
    </div>
  )
}

export default CardBus4
