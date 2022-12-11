import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import Navigation from '../../Home/Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const AllOrders = () => {
    const [allOrders,setAllOrders]=useState([]);
     
    useEffect(()=>{
        fetch('https://moto-bike-shop-server-production.up.railway.app/allOrders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[])

    const handleDelete=(id)=>{
        console.log(id)
        fetch(`https://moto-bike-shop-server-production.up.railway.app/delete/${id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        })
        .then(result=>{
            const remain = allOrders.filter(order => order._id !== id);
            setAllOrders(remain)
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
                <div className=" col-md-8 col-lg-8 shadow ">
                    <div className=''>
                        <h2 className='text-center my-4 text-secondary'> All Orders</h2>
                      <div className='table-responsive-sm'>
                      <table  className='table' >
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
                                    allOrders.map((order,index)=>
                                    <tr >
                                    <td >{index+1}</td>
                                    <td >{order.email}</td>
                                    <td>{order.productName}</td>
                                    <td>$ {order.price}</td>
                                    <td onClick={()=>handleDelete(order._id)} ><span className="bg-danger py-1 px-2 rounded text-light cursor-pointer"><FontAwesomeIcon icon={faTrash} /></span> </td>
                                </tr>
                                    )
                                }
                                
                            </tbody>
                        </table>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AllOrders;