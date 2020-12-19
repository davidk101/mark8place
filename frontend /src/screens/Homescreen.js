import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios' // alternative to fetch API

function Homescreen(){

    const [products, setProducts] = useState([]) // first param - what we call this state  // second param - function to manipulate the state

    useEffect(() =>{ // useEffect hook is called after render() i.e. after DOM updates to request data from backend
        const fetchProducts = async() => { // asnychronous function
            const {data} = await axios.get('/api/products') // 'data' variable is destrucutured so we can use it directly

            setProducts(data)
        }
        fetchProducts()
    }, [])
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