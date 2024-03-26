import { Link, useMatch, useResolvedPath } from  "react-router-dom"
import { Dropdown, Badge, Container, FormControl, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart(){
    return(
        <Nav>
        <Dropdown>
            <Dropdown.Toggle varient="success">
                <FaShoppingCart color="white" fontSize="25px"/>
                <Badge>{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370}}>
                <span style={{padding: 10}}>Cart is Empty</span>
            </Dropdown.Menu>
        </Dropdown>
        </Nav>
    )
}