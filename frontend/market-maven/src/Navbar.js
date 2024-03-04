import { Link, useMatch, useResolvedPath } from  "react-router-dom"
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
    {/*const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resolvedPath.pathname, end: true })*/}
    return(
        <li className={path === href ? "active" : ""}>
            <a href ={href} {...props}>
                {children}
            </a>
        </li>
    )

}