import React from 'react'
import {Row, Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

function Homescreen(){
    return(
        <>
            <h1>Latest Products</h1>
            <Row>
                {/*creating a list*/}
                {products.map(product =>(
                    <Col key = {product._id}>
                        <Product product = {product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Homescreen