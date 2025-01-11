import Fooditem from "./Fooditem"
import API from "../data/Api.json"
import Itemsize from "./Itemsize"


export const Menu=()=>{
    return(
        <>
        
        <div className=" w-full h-screen flex justify-center items-center flex-col bg-[#f1f1f1]">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-[3vw] capitalize text-orange-500 relative bg-[#f1f1f1] px-4 z-10">food menu</h1>
                
                <div className="w-[23vw] h-[3px] bg-orange-500 absolute">
                    
                </div>
            </div>
            <div className="w-[98vw] px-[5vw] h-[75vh] overflow-x-hidden  grid grid-cols-2   ">
{
    API.map((item)=>{
        return(
        <Fooditem item={item} />
          
        )
    })
}
            </div>
        
        </div>
            </>
    )
}
export default Menu