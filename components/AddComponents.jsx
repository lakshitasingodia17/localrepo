import gsap from "gsap"

const AddComponents=({className})=>{
const close=()=>{
    gsap.to(".SideSwiper",{
        top:"-90vh",
    
    })
}
    return(<>
    <div className={`w-[30vw] ${className} h-[70vh] bottom-0 fixed z-30 right-[0vw] rounded top-[-80vh] bg-white`}>
 <i onClick={()=>close()} class="ri-close-circle-line text-[orange] cursor-pointer text-[2vw] absolute right-1"></i>
    </div>
    </>
    )
}

export default AddComponents