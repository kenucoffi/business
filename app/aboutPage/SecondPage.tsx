import Image from "next/image"
export default function SecondPage(){
    return(
         <div className="flex flex-col w-full h-[500px] bg-gray-100 ">           
            <div className="h-[200px] flex justify-center items-center"><div className="w-xl  text-4xl text-neutral-800 text-center">We are fully distributed, which means you can join us whenever you want.</div></div>
            <div className="grid grid-cols-3 ">
                <div className="relative  h-[250px] col-span-1 opacity-50 "><Image src="/img1.jpg" alt="image" fill/></div>
                <div className="relative mx-3 h-[250px] col-span-1 opacity-100 "><Image src="/img2.jpg" alt="image" fill/></div>
                <div className="relative h-[250px] col-span-1 opacity-50 "><Image src="/img3.jpg" alt="image" fill/></div>
            </div>
         </div>
    )
}
