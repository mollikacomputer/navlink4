import Link from "next/link";
import NavLink from "./NavLink";

const navLinks=[
    {
        path:'/',
        title:"Home",
    },
    {
        path:'/about',
        title:"About",
    },
    {
        path:'/contact',
        title:"Contact",
    },
    {
        path:'/services',
        title:"Services",
    },
    {
        path:'/dashboard',
        title:"Dashboard",
    },
];

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between container mx-auto">
            <h2 className="text-2xl font-semibold text-blue-500" > Navbar Practice </h2>
            <ul className="flex">
                {navLinks.map(({path, title})=>(
                    <li className="mx-2" key={path}>
                        <NavLink exact={path==='/'} activeClassName={"text-blue-500"} href={path} >
                            {title}
                        </NavLink>
                        </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;