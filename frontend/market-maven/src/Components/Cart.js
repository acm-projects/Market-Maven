import { Link, useMatch, useResolvedPath } from  "react-router-dom"
//import { Dropdown, Badge, Container, FormControl, Nav, Navbar } from "react-bootstrap";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


// this could honestly just be kept within Navbar instead of as its own component
export default function Cart(){
    return(
        <>
        <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon/>
        </Badge>
        </>

    );
};





{/*
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
        */}