import { Outlet } from 'react-router-dom';
import Navbar  from "../src/components/Navbar.jsx";

const MainLayout = () => {
    return <>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </>
}

export default MainLayout;
