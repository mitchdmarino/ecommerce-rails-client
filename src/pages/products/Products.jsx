import {useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Product from './components/Product'

const Button = styled.p`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: black;
    color: white;
    border: 2px solid white;
`


export default function Products ({currentUser, addToCart}) {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products`)
                setProducts(response.data)
                
            } catch (err) {
                console.log(err)
            }
        }
        getProducts()
    }, [])
    
    const productList = products.map((product, i) => {
        return (
                <Product key={i} product={product} currentUser={currentUser} addToCart={addToCart}/>
        )
    })

    return (
        <div>
            <h1 className='text-5xl p-10 mb-10'>Mug Selection</h1>
            {currentUser && currentUser.admin? <Link to={"/products/new"}><Button>Add Product</Button></Link>: '' }
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {productList}
            </div>
            
        </div>
    )
}