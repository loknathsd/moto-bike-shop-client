import React,{useState,useEffect,useContext} from 'react';
import { Table } from 'react-bootstrap';
import Navigation from '../../Home/Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';
import {ContextUser} from '../../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const MyOrders = () => {
   const [loggedInUser,setLoggedInUser] = useContext(ContextUser)

    const [myOrders,setMyOrders] = useState([])

    useEffect(()=>{
       fetch('https://pacific-headland-82013.herokuapp.com/myOrders?email='+loggedInUser.email)
       .then(res=>res.json())
       .then(data=>setMyOrders(data))
    },[])


    const handleDelete=(id)=>{
        fetch(`https://pacific-headland-82013.herokuapp.com/delete/${id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        })
        .then(result=>{
            const remain = myOrders.filter(order => order._id !== id);
            setMyOrders(remain)
            Swal.fire({
                icon: 'success',
                title: 'Deleted !!!',
                text: 'Your Order has been deleted',
                
              })
        })
    }
    return (
        <section className='pt-5 mt-5'>
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9 shadow ">
                        <div>
                            <h2 className='text-center my-4 text-secondary'>{loggedInUser.name}'s Orders</h2>
                            <Table striped bordered hover className='text-center'>
                                <thead>
                                    <tr >
                                        <th>#</th>
                                        <th>Email</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myOrders.map((order,index)=>
                                        <tr >
                                        <td >{index+1}</td>
                                        <td >{order.email}</td>
                                        <td>{order.productName}</td>
                                        <td>$ {order.price}</td>
                                        <td onClick={()=>handleDelete(order._id)} ><span className="bg-danger py-1 px-2 rounded text-light"><FontAwesomeIcon icon={faTrash} /></span> </td>
                                    </tr>
                                        )
                                    }
                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyOrders;