import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ContextUser } from '../../../App';
import logo from '../../../images/icon/logo.png'
import './Navigation.css'
import { getAuth, signOut } from "firebase/auth";

const Navigation = () => {

    const [loggedInUser, setLoggedInUser] = useContext(ContextUser)

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
           const signOutInfo = {
               name :'',
               email:'',
               photoURL:''
           }
           setLoggedInUser(signOutInfo)
        }).catch((error) => {
           console.log(error)
        });
    }

    return (
        <Navbar className=" " bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand to="/home"><img style={{ height: '50px' }} src={logo} alt="" /> </Navbar.Brand>
                <Navbar.Brand to="/"><h1 style={{ fontFamily: 'fantasy', color: '#FF1493' }}>motoBike</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto fw-bold nav-area">
                        <NavLink className="px-4 active" to="/home">Home</NavLink>
                        <NavLink className="px-4 active" to="/">Products</NavLink>
                        <NavLink className="px-4 active" to="/dashboard">Dashboard</NavLink>
                    </Nav>
                    <h4 className='mx-3'>{loggedInUser.name}</h4>
                    {
                        loggedInUser.email ? <NavLink onClick={handleSignOut} className="btn btn-secondary text-light" to="">SignOut</NavLink>
                            :
                            <NavLink className="btn btn-secondary text-light" to="/login">LogIn</NavLink>
                    }
                </Navbar.Collapse>

            </Container>
        </Navbar>

    );
};

export default Navigation;