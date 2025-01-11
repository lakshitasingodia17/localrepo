import gsap from "gsap"
import Button from "./Button"
import { About } from "./About"
import Service from "./Service"
import Menu from "./Menu"
import Bookform from "./Bookform"





const Home =()=>{
    const handleForm=()=>{
        
    }
    gsap.from(".elem-2",{
        x:"-30",
        opacity:"0",
        duration:"2",
        yoyo:true

    })
    gsap.to(".rotate",{
        rotate:"360deg",
        duration:"50",
        repeat:"-1",
        yoyo:true
    })
   
    return(
        <>
         <div className=" h-[120vh] w-full ">

  <div className="w-full bg-cover brightness-[.2] h-[120vh] bg-[url('https://images.unsplash.com/photo-1613082589739-004c07170907?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] absolute"></div>
  
           <div className="w-full h-[110vh] absolute flex z-10 text-[white] overflow-hidden">
        <div className=" elem-2 w-[50%] h-full flex flex-col justify-center items-start pb-[7vw] pl-[8vw]">
        <h1 className="text-[5vw] w-[40vw] ">Enjoy Our
        Delicious Meal</h1>
        <p className="w-[40vw]">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <button onClick={()=>{handleForm()}} className="mt-[3vw] bg-[orange] py-[15px] px-[3vw] rounded uppercase hover:bg-[#ff933b]">book a table</button>
        </div>
        <div className="w-[50%] h-full flex justify-center relative items-center">
            <img className="w-[75%] rotate absolute bg-cover bg-none " src="https://static.vecteezy.com/system/resources/thumbnails/048/559/014/small_2x/spaghetti-pasta-all-by-itself-on-a-transparent-background-free-png.png" alt="" />
            </div>
      </div>
    </div>
    <Bookform/>
    <Service />
    <About />
    <Menu />
   
        </>
    )
}
export default Home;