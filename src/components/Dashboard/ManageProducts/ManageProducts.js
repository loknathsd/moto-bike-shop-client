import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Navigation from '../../Home/Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';

const ManageProducts = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('https://pacific-headland-82013.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleProductDelete=(id)=>{
        fetch(`https://pacific-headland-82013.herokuapp.com/deleteProduct /${id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        })
        .then(result=>{
            const remain = products.filter(product => product._id !== id);
            setProducts(remain)
            Swal.fire({
                icon: 'success',
                title: 'Deleted !!!',
                text: 'Your Product has been deleted',
                
              })
        })
    }
    return (
        <section className='mt-5 pt-5'>
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8 col-lg-9 shadow p-3">
                    <h2 className='text-center mb-4 text-secondary'> All Products</h2>
                            <Table striped bordered hover className='text-center'>
                                <thead>
                                    <tr >
                                        <th>#</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product,index)=>
                                        <tr >
                                        <td >{index+1}</td>
                                        <td>{product.name}</td>
                                        <td>$ {product.price}</td>
                                        <td onClick={()=>handleProductDelete(product._id)} ><span className="bg-danger py-1 px-2 rounded text-light"><FontAwesomeIcon icon={faTrash} /></span> </td>
                                    </tr>
                                        )
                                    }
                                    
                                </tbody>
                            </Table>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ManageProducts;