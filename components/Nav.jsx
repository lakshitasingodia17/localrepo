import Button from "./Button";

export const Nav=()=>{
    return(
        <>
         <nav className="h-[10vh]  brightness-[1] w-full flex justify-between items-center px-[4vw] uppercase text-[white] bg-[black] ">
<div className=" h-[14vh] flex items-center justify-evenly">
      <i class="ri-restaurant-fill text-[orange] text-[3.5vw] pr-2"></i>
      <h1 className="uppercase font-extrabold text-[2.4vw] text-[orange]">gudha delight</h1></div>
        <div className="elem flex gap-8 uppercase items-center text-[1.2vw] font-bold">
<Button home={"home"}  url={"/"}/>
<Button home={"about"} url={"/about"}/>
<Button  home={"service"} url={"/service"}/>
<Button  home={"menu"} url={"/menu"}/>
<Button  home={"contact"} url={"/contact"}/>

          <i class="ri-shopping-cart-fill bg-[orange] px-6 py-2 rounded hover:bg-[#ff933b]"><button className="capitalize text-[1.3vw] ">cart</button></i> 
        </div>

      
      </nav>


        </>
    )
}
export default Nav;