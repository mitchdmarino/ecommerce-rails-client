import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ProductsForm from './ProductsForm'

export default function ProductDetails ({currentUser}) {
    let {id} = useParams()
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/products/${id}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])


    return (
        <>
        <h1>{product.name}</h1>
        
        {currentUser && currentUser.admin? <ProductsForm initialForm={{name: product.name || '', price: product.price || 0, description: product.description || ''}} productId={product.id} />: ''}
            
        </>
    )
}