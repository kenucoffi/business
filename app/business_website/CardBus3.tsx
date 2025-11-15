
import Image from "next/image"

interface CardInfo {
    image:String
    title:String
    description:String
}
export default function CardBus3({image,title,description}:CardInfo){
    return(
        <div className="ml-5 cursor-pointer relative h-[400px] col-span-1 flex flex-col transition duration-300 hover:scale-110 ">
            <div className="absolute  ml-3 flex justify-center items-center   h-[74%] w-[200px] border  rounded-xl border-gray-400">                
            </div>
            <div className=" mt-3   h-[74%]  w-[200px]"><div className="h-[100%] relative overflow-auto rounded-xl "><Image src={"/"+image} alt="image" fill /></div></div>
            <div className="mt-2 w-[200px] flex flex-col">
                <h1 className="font-bold text-lg ">{title}</h1>
                <p className="font-light text-sm">{description} </p>
            </div>

        </div>
    )
}