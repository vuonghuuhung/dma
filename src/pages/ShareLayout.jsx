import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ShareLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}