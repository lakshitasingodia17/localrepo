import {NavLink} from "react-router"
const Button =(props)=>{
    const{home,url}=props
return(
    <NavLink to={url}  className="cursor-pointer hover:text-[orange] duration-200">{home}</NavLink>
    
)
}
export default Button