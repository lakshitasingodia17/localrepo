import { Outlet } from "react-router"
import Nav from "./Nav"
import Footer from "./Footer"

export const Layout=()=>{
    return(
        <>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout