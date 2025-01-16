import gsap from "gsap";
import Itemsize from "./Itemsize";

export const Fooditem=(props)=>{
    const {productName,id ,price,discription,img,rating}=props.item
    const itemSizeBlock=()=>{
        gsap.to(".itemSize",{
            duration:0.5,
            opacity:1,
            display:"block"
        })
    }
    return(
        <>
        <Itemsize name={"itemSize"} />
        <div className="w-[100%] my-[2vw] h-[6vw] justify-between  flex ">
<img className="h-[100%] w-[15%] ml-[2vw] object-cover" src="https://plus.unsplash.com/premium_photo-1672363353897-ae5a81a1ab57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

<div className="w-[75%] h-[100%] " >
    <div className="w-full h-[50%] flex justify-between">
<div className="w-[50%] h-full">
<h1 className="capitalize text-[1.5vw] tracking-[3px]">{productName}</h1>

</div>
<div className="w-[10%] h-full">
    <h1 className="text-[1.3vw]">₹{price}</h1>
    {/* <h1 className="text-[13px] pb-3">{rating}<i class="ri-star-half-s-fill text-[#caca26]"></i></h1> */}
</div>
    </div>
    <hr />
    <div className="w-full h-[50%] flex justify-between items-center">
    <h1 className="capitalize text-[#585858]"> ({discription})</h1>
        <button onClick={()=>{itemSizeBlock()}} className="bg-[orange] px-[1.5vw] pt-1 duration-200 font-bold text-[white] rounded-lg hover:bg-transparent border hover:border-[orange] hover:text-[#ff933b]">Add</button>
    </div>
</div>
        </div>
        </>
    )
}
export default Fooditem;