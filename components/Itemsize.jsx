import gsap from "gsap"
import { useState } from "react"

export const Itemsize = ({name}) => {
const[count,setCount]=useState(0)
const hideBox=()=>{
    gsap.to(`.itemSize`,{
        display:"none",
    })
        
}

    return (
       <div className={`h-[75vh] ${name} ml-[35%] hidden  z-20 bg-[#eeecec] w-[25vw] border border-gray-200 absolute  rounded-lg`}>
        
       <div className="h-[75vh] bg-[#eeecec] w-[25vw] border border-gray-200 relative  rounded-lg">
       <div onClick={()=>{hideBox()}} className="absolute text-[3vw] mt-[-4vw] ml-[10.2vw] cursor-pointer"><i class="ri-close-circle-line text-[#504e4e]"></i></div>
        <div className="flex gap-2 bg-[#ffffff] py-2 px-2 rounded-t-lg">
            <img className="w-[3vw] rounded-lg h-[3vw]" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="text-[2vw] ">pizza</h1>
        </div>
        <div className="bg-white rounded-lg mt-3 w-[96%] ml-[2%]  py-2 px-2">
            <div className="  relative">
            <h1 className="capitalize font-bold">quantity</h1>
            <p className="text-[1vw] text-[#5f5f5f] capitalize mt-[-1.2vw]">required <span className="text-[2vw] relative mt-[-30px] ">.</span>   select any 1 option</p></div>
            <div className="w-full h-[1px] bg-[#dbdbdb]"></div>
            <div className="flex justify-between items-center my-3">
                <h1 className="capitalize font-bold">small</h1>
                <div className="flex items-center gap-1 h-6">
                    <h1 className="font-bold">110</h1>
                <input className="mt-[-5px]" type="radio" name="same" /></div>
            </div>
            <div className="flex justify-between items-center my-2">
                <h1 className="capitalize font-bold">large</h1>
                <div className="flex items-center gap-1 h-6">
                <h1 className="capitalize font-bold">120</h1>
                <input className="mt-[-5px] focus:ring-indigo-900" type="radio" name="same" />
                </div>
            </div>
            
        </div>
        <div className="bg-white rounded-lg mt-3 w-[96%] ml-[2%]  py-2 px-2">
                <div><h1 className="capitalize my-2">add a cooking request (optional)</h1></div>
                {/* <input className="w-full h-[15vh]" type="text" placeholder="e.g Don't make it too spicy"/>4
                 */}
                 <textarea className="outline-none rounded-lg px-1 py-1 text-[1vw] placeholder:text-gray-500 bg-gray-200" name="" cols={41} rows={3} placeholder="e.g Don't make it too spicy" id=""></textarea>
            </div> 
            <div className="bg-white h-[10vh] flex w-full justify-between absolute bottom-0 rounded-b-lg">
                <div className="w-[28%] ml-[2%] h-[60%] text-[1.3vw] font-bold justify-between items-center rounded-lg mt-[5%] flex border border-orange-600 px-2 bg-[#fdc08e9a]">
<button onClick={()=>{
    if(count>0){
        setCount(count-1)
    }
}} className="text-[2vw] ">-</button>
<h1>{count}</h1>
<button onClick={()=>{
    setCount(count+1)
}} className="text-[1.6vw]">+</button>
                </div>
                <div className="w-[70%] h-full pt-[17px] px-2 pb-[9px]">
                    <button className="text-[1.3vw] w-full h-full rounded-lg bg-[#ff933b]">Add item price</button>
                </div>
            </div>
       </div>
       </div>
    )
}
export default Itemsize;