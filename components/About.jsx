import AOS from 'aos';
import 'aos/dist/aos.css'

export const About=()=>{
    AOS.init();
    return(
        <>
        <div className="h-screen w-full flex ">
            <div className="left h-full w-[50vw] grid grid-cols-2">
            <div data-aos="zoom-in"><img className="w-[19vw] ml-[9vw]  rounded" src="https://themewagon.github.io/restoran/img/about-1.jpg" alt="" /></div>
          <div data-aos="zoom-in"><img className="w-[15vw] ml-[4vw] rounded mt-[4vw]" src="https://themewagon.github.io/restoran/img/about-2.jpg" alt="" /></div>
            <div data-aos="zoom-in"><img className="w-[15vw] mt-[-6vw] rounded ml-[13vw]" src="https://themewagon.github.io/restoran/img/about-3.jpg" alt="" /></div>
            <div data-aos="zoom-in"><img className="w-[20vw] mt-[-6vw] rounded ml-[4vw]" src="https://themewagon.github.io/restoran/img/about-4.jpg" alt="" /></div>

            </div>
            <div className="right h-full w-[50vw]">
<h5 className='text-[2vw] text-[orange] font-bold capitalize pt-10 pl-7'>about us _____ </h5>
<h1 className='text-[3vw] font-bold capitalize pl-7'>welcome to <span className='text-[orange]'><i class="ri-restaurant-fill"></i></span> gudha delight</h1>
<p className='pl-7 pt-4 text-[1.3vw]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit. <br /> <br />

Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
<button className="mt-[3vw] bg-[orange] py-[15px] px-[3vw] ml-7 uppercase duration-200 font-bold text-[white] rounded-lg hover:bg-transparent border hover:border-[orange] hover:text-[#ff933b]">read more </button>
            </div>

        </div>
        </>
    )
}