import { useState } from "react"
import Fooditem from "./Fooditem"
import products from "../data/Api.json"
    const MenuSection=()=>{

    const [select ,setSelect]=useState("breakfast")

    const filterItems =products.filter((item)=> item.category === select)
console.log(filterItems);

    return(
        <>
                <div className=" w-full h-screen flex justify-center pt-[3vw] items-center flex-col bg-[#f1f1f1] drop-shadow-xl">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-[3vw] capitalize text-[orange] relative bg-[#f1f1f1] px-4 z-10">food menu</h1>
                
                <div className="w-[23vw] h-[3px] bg-[orange] absolute">
                    
                </div>
            </div>

        <div className="flex gap-7 my-[3vw]">
            <button onClick={()=>setSelect("breakfast")} className={`flex border-b-2  gap-2 items-center ${
                select === "breakfast"
                ? "text-[orange] border-[orange]" 
                : "text-black border-[#dddddd]"
            }`}>
                <i class="ri-cup-fill text-[3vw] text-[orange]"></i>
                <h1 className="text-[1.4vw] text-start font-bold"><h1 className="text-[1.1vw] mb-[-4px] text-[#585555] capitalize">popular</h1>BreakFast </h1>
            </button>
            <button onClick={()=>setSelect("fastfood")} className={` flex border-b-2  gap-2 items-center ${
                select === "fastfood"
                ? "text-[orange] border-[orange]" 
                : "text-black border-[#dddddd]"
            }`}>
                 <i class="ri-bread-fill text-[3vw] text-[orange]"></i>
                <h1 className="text-[1.4vw] text-start font-bold"><h1 className="text-[1.1vw] mb-[-4px] text-[#585555] capitalize">Special</h1>FastFood </h1>
   
            </button>
            <button onClick={()=>setSelect("dinner")} className={` flex border-b-2  gap-2 items-center ${
                select === "dinner"
                ? "text-[orange] border-[orange]" 
                : "text-black border-[#dddddd]"
            }`}>
                 <i class="ri-restaurant-2-fill text-[3vw] text-[orange]"></i>
                <h1 className="text-[1.4vw] text-start font-bold"><h1 className="text-[1.1vw] mb-[-4px] text-[#585555] capitalize">lovely</h1>Lunch/Dinner </h1>
   
            </button>
        </div>

        <div className="w-[98vw] px-[5vw] h-[75vh] overflow-x-hidden  grid grid-cols-2   ">
            {
                filterItems.map((item)=>{
return(
    <Fooditem  item={item}/>
)
                })
            }
            </div>
        </div>
        </>
    )
}
export default MenuSection