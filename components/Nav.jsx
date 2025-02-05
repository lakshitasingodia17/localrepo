import gsap from "gsap";
import AddComponents from "./AddComponents";
import Button from "./Button";

export const Nav = () => {

  const leftSwiper=()=>{
    gsap.to(".SideSwiper",{
      top:"10vh",
      duration:1
    })
  }
  return (
    <>
      <nav className="h-[10vh]  brightness-[1] w-full fixed top-0 z-50 flex justify-between items-center px-[4vw] uppercase text-[white] bg-[black] ">
        <div className=" h-[14vh] flex items-center justify-evenly">
          <i class="ri-restaurant-fill text-[orange] text-[3.5vw] pr-2"></i>
          <h1 className="uppercase font-extrabold text-[2.4vw] text-[orange]">gudha delight</h1></div>
        <div className="elem flex gap-8 uppercase items-center text-[1.2vw] font-bold">
          <Button home={"home"} url={"/"} />
          <Button home={"about"} url={"/about"} />
          <Button home={"service"} url={"/service"} />
          <Button home={"menu"} url={"/menu"} />
          <Button home={"contact"} url={"/contact"} />

          <i onClick={()=>leftSwiper()} class="ri-shopping-cart-fill px-6 py-2 bg-[orange] duration-200 font-bold text-[white] rounded-lg hover:bg-transparent border hover:border-[orange] hover:text-[#ff933b]"><button className="capitalize  text-[1.3vw] font-bold rounded-lg hover:border-[orange]">cart</button></i>
        </div>
       

      </nav>
      <AddComponents className={"SideSwiper"} />

    </>
  )
}
export default Nav;