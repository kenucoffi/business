import CardBus3 from "./CardBus3"

const cards=[
    {img:"code1.jpg" , title:"Advanced Features",description:"Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts."},
    {img:"code2.jpg", title:"Advanced Features",description:"Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts."},
    {img:"code3.jpg", title:"Advanced Features",description:"Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts."},
]
const cardmap= cards.map((card) =>{
    return(
        <CardBus3 image={card.img} title={card.title} description={card.description}/>
    )
})
export default function Forth_page(){
    return (
        <div className=" h-full w-full flex flex-col mb-5">
            <div className=" h-[400px] w-full bg-indigo-500   ">
                <h1 className="py-10 text-4xl text-center font-bold font-serif ">Simplify operating and manage <br/>with transparency</h1>
            </div>
            <div className="mt-[-200px] space-y-4 grid sm:grid-cols-2 md:grid-cols-3 place-items-center">
                    {cardmap}
            </div>

        </div>
    )
}
