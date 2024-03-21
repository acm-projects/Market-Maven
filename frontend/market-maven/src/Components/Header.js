import { Link, useMatch, useResolvedPath } from  "react-router-dom"
export default function Header(){
    return(<nav className="Header">
        <Link to="/" className="site-title">Market Maven</Link>
        <ul >
            <CustomLink to="/page1">Page 1</CustomLink>
            <CustomLink to="/page2">Page 2</CustomLink>
            <CustomLink to="/page3">Page 3</CustomLink>
        </ul>
    </nav>
)}

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