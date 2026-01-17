import React from "react";
const Navbar = () =>{

const navlinks = [
{name : "Home" , path : "/"},
{name : "About" , path : "/about"},
{name : "Contactus" , path : "/contactus"},
]
return(
    <>
    <div>
        <ul>
        {navlinks.map((items)=>(
            <li key={items.path}>
                <a href={items.path}>{items.name}</a>
            </li>
        ))}
        </ul>
    </div>
    </>
)
}
export default Navbar;