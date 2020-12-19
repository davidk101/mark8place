import React from 'react'
import {Link} from 'react-router-dom' // docs: https://reactrouter.com/web/api/Link
import {Card} from 'react-bootstrap'
import Rating from './Rating'


function Product({product}){
    return(
        <Card>
            <Link to={`/product/${product._id}`}> {/* <Link> wont trigger a full page refresh as react is used for single page applications whereas <a> will*/}
                <Card.Img src = {product.image} variant = 'top' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as = 'div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as = 'div' >
                    <Rating value = {product.rating} text = {`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as = 'h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product