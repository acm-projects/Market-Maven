import { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom"
import "./Navbar.css"
// import Cart from "../Components/Cart"

import { useAuthContext } from "../hooks/useAuthContext";
import { NavbarMenu } from "./NavbarMenu";

import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Navbar() {

    const { accessToken } = useAuthContext()

    const [search, setSearch] = useState("")
    const [zip, setZip] = useState("")

    const [cartAmount, setCartAmount] = useState(0)

    const navigate = useNavigate();

    // useffect to get cart amount, zip, etc
    useEffect(() => {}, [])

    const handleSearch = (e) => {
        e.preventDefault();

        const queryString = `?${search.trim() && `searchQuery=${search.trim()}&`}${zip.trim() && `zip=${zip.trim()}`}`.slice(0, -1);
        navigate(`/Shop${queryString}`);
    }

    const renderCart = () => {
        if (cartAmount > 0) {
            return (
                <Badge badgeContent={cartAmount} color="primary">
                    <ShoppingCartOutlinedIcon />
                </Badge>
            )
        }

        return (
            <ShoppingCartOutlinedIcon />
        )

    }

    const accountButton = () => {

        // change to accordion with logout function and or settings
        if ( accessToken ) return <NavbarMenu />

        return <Link className="" to="/login"><AccountCircleOutlinedIcon /></Link>
    }


    return (
        <nav className="Navbar p-4 flex flex-col md:flex-row items-center">
            <div className="w-full flex flex-row justify-between md:w-auto">
                <Link to="/" className="px-2 py-4 h-full site-title justify-center">Market Maven</Link>
                <ul className="m-4 flex justify-center gap-4 md:w-auto md:hidden">
                    <Link className="" to="/Shop">Browse</Link>
                    <Link className="" to="/CartPage">
                        {renderCart()}
                    </Link>
                    {accountButton()}
                </ul>
            </div>
            <form className="my-4 flex flex-row w-full max-w-[800px] md:w-1/2" onSubmit={handleSearch}>
                <input className="mx-1 p-3 w-4/5 bg-[#f0f0f0] rounded-full text-md" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" id="search" name="search" />
                <input className="mx-1 p-3 w-1/5 bg-[#f0f0f0] rounded-full text-md" type="text" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="ZIP" id="zip" name="zip" />
                <button className="mx-2" type="submit"><SearchOutlinedIcon /></button>
            </form>
            {/* <ul className="flex flex-wrap">
            <CustomLink to="/Shop">Shop</CustomLink>
            <CustomLink to="/page2">Page 2</CustomLink>
            <CustomLink to="/page3">Page 3</CustomLink>
        </ul> */}

            <ul className="m-4 hidden justify-center gap-4 w-full md:w-auto md:flex">
                <Link className="" to="/Shop">Browse</Link>
                <Link className="" to="/CartPage">
                    {renderCart()}
                </Link>
                {accountButton()}
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )

}



{/*import { Link, useMatch, useResolvedPath } from  "react-router-dom"
import { Dropdown, Badge, Container, FormControl, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = () =>{
    return( 
        <Navbar>
            <Container>
                <Navbar.Brand><Link to="/" className="site-title">Market Maven</Link></Navbar.Brand>
                <Navbar.Text>
                <ul >
                    <CustomLink to="/page1">Page 1</CustomLink>
                    <CustomLink to="/page2">Page 2</CustomLink>
                    <CustomLink to="/page3">Page 3</CustomLink>
                </ul>
                    <FormControl 
                    style={{ width: 500}} 
                    placeholder= "search items"
                    className="m-auto"/>
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle varient="success">
                            <FaShoppingCart color="white" fortSize="25px"/>
                            <Badge>{10}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370}}>
                            <span style={{padding: 10}}>Cart is Empty</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    
    )
}

export default Header;

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return(
        <li className={isActive ? "active" : ""}>
            <Link to ={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
*/}



{/*import { Link, useMatch, useResolvedPath } from  "react-router-dom"
export default function Navbar(){
    return(<nav className="NavBar">
        <a href="/" className="site-title">Market Maven</a>
        <ul >
            <CustomLink href="/page1">Page 1</CustomLink>
            <CustomLink href="/page2">Page 2</CustomLink>
            <CustomLink href="/page3">Page 3</CustomLink>
        </ul>


    </nav>
)}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return(
        <li className={path === href ? "active" : ""}>
            <a href ={href} {...props}>
                {children}
            </a>
        </li>
    )

}
*/}