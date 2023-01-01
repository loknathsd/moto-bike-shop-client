import { faBars, faCommentAlt, faPlus, faPlusSquare, faShoppingBasket, faSignOutAlt, faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth, signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ContextUser } from '../../../App';
import './Sidebar.css'


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(ContextUser);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://moto-bike.onrender.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])



    const handleLogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            const logOut = {
                name: '',
                email: '',
                photaURL: ''
            }
            setLoggedInUser(logOut)
        }).catch((error) => {

        });
    }
    return (
        <Navbar className='bg-light pt-3'>
            <Container>
                <Nav className="flex-column  sidebar-area">
                    <h1 >Dashboard</h1>
                    <hr />
                    {!isAdmin && <NavLink to="/dashboard/myOrders"><span><FontAwesomeIcon icon={faShoppingBasket} /></span> My orders</NavLink>}
                    {!isAdmin && <NavLink to="/dashboard/addReview"><span><FontAwesomeIcon icon={faCommentAlt} /></span> Add Review</NavLink>}

                    {isAdmin && <NavLink to="/dashboard/manageOrders" ><span><FontAwesomeIcon icon={faBars} /></span> Edit all Orders </NavLink>}
                    {isAdmin && <NavLink to="/dashboard/addProduct" ><span><FontAwesomeIcon icon={faPlus} /></span>  Add Product </NavLink>}
                    {isAdmin && <NavLink to="/dashboard/manageProducts" ><span> <FontAwesomeIcon icon={faBars} /></span> Edit Products </NavLink>}
                    {isAdmin && <NavLink to="/dashboard/makeAdmin" ><span><FontAwesomeIcon icon={faUserPlus} /></span> Make Admin</NavLink>}
                    <NavLink onClick={handleLogOut} style={{ marginTop: '' }} to="" ><span><FontAwesomeIcon icon={faSignOutAlt} /></span> LogOut</NavLink>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Sidebar;