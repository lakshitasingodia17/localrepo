import Card from "./Card";
import AOS from 'aos';
import 'aos/dist/aos.css';
 export const Service=()=>{
    AOS.init();
    return(
        <div className="w-full bg-[#f1f1f1] h-[65vh] flex justify-evenly items-center ">
            <div data-aos="fade-up" data-aos-duration="500"
    data-aos-easing="ease-in-out"><Card icon={"ri-user-2-fill"} title={"master chefs"} descreption={"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"}/></div>
            <div data-aos="fade-up" data-aos-delay="50"  data-aos-duration="1000"
    data-aos-easing="ease-in-out"><Card icon={"ri-restaurant-fill"} title={"quality food"} descreption={"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"} /></div>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
    data-aos-easing="ease-in-out"><Card icon={"ri-shopping-cart-fill"} title={"online order"} descreption={"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"}/></div>
            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"
    data-aos-easing="ease-in-out"><Card icon={"ri-customer-service-2-fill"} title={"24/7 service"} descreption={"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"}  /></div>
            

        </div>
    )
}

export default Service ;