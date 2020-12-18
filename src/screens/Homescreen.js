import React from 'react'
import {Row, Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

function Homescreen(){
    return(
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product =>(
                    <Col>
                        <Product product = {product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Homescreen