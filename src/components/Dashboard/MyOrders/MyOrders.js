import React,{useState,useEffect,useContext} from 'react';
import Navigation from '../../Home/Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';
import {ContextUser} from '../../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const MyOrders = () => {
   const [loggedInUser] = useContext(ContextUser)

    const [myOrders,setMyOrders] = useState([])

    useEffect(()=>{
       fetch('https://moto-bike-shop-server.vercel.app/myOrders?email='+loggedInUser.email)
       .then(res=>res.json())
       .then(data=>setMyOrders(data))
    },[loggedInUser.email])


    const handleDelete=(id)=>{
        fetch(`https://moto-bike-shop-server.vercel.app/delete/${id}`,{
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
                    <div className="col-md-4 col-lg-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8 col-lg-9 shadow ">
                        <div>
                            <h2 className='text-center my-4 text-secondary'>{loggedInUser.name}'s Orders</h2>
                           <div className='table-responsive-sm'>
                          {myOrders.length>0 && <table className='table'>
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
                            </table>}
                            {myOrders.length ===0 && <h1 style={{textAlign:"center" ,marginTop:'3rem'}}>No ordered yet !!</h1> }
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyOrders;