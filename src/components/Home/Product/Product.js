import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, price, engine,description,_id } = product
    
    const history=useHistory()


    const handlePurchase=(id)=>{
        history.replace(`/purchase/${id}`)
        console.log(id)
    }
    return (
        <Col xs={12} md={4}>
            <Card  style={{ margin:'10px 0',  paddingBottom: '20px', }}>
                <Card.Img style={{ height: '250px', }} className="bg-light"  variant="top" src={img} />
                <Card.Body className="text-center">
                    <Card.Title className="mb-2"> <h3>{name}-125cc</h3> </Card.Title>
                    <Card.Text className="text-secondary my-4">{description}</Card.Text>
                    <Card.Text className="d-flex justify-content-between container">
                        <h3 className='text-danger fw-bold' >$ {price}</h3>
                        <Button onClick={()=>handlePurchase(_id)} variant="primary">Purchase</Button>
                    </Card.Text>
                </Card.Body>
            </Card>

            
        </Col>
    );
};

export default Product;