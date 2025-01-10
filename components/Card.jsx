export const Card =(props)=>{
    const{icon,title,descreption}=props
    return(
        <div className="w-[20vw] h-[40vh]  rounded py-[1.3vw] px-[1.3vw] bg-[white] cursor-pointer hover:bg-[orange] text-[black] duration-500 cardBox">
            <i class={` text-[4vw] ml-[-10px] text-[orange]  ${icon}`}></i>
            <h1 className="capitalize text-[1.8vw] font-bold ">{title}</h1>
            <p className=" mt-[5px] text-[#363636]  ">{descreption}</p>
        </div>
    )
}

export default Card;