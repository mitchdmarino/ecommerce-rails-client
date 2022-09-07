import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'flowbite-react'

const ProductCard = styled.div`
    
   
`



export default function Product ({product, currentUser, addToCart}) {
    const navigate = useNavigate()

    const navToDetails = (id) => {
        if (currentUser) {
            navigate(`/products/${id}`)

        }
    }
    
   

    return (
        <ProductCard >
            <div onClick={e => navToDetails(product.id)}>
                <img src={product.image} alt={product.description} className="block mx-auto my-5 h-[150px]"></img>
                <h2 className='text-xl p-2'>{product.name}</h2>
                <h3 className='text-xl'>${product.price}</h3>
                <p className='px-5 py-2 text-md'>{product.description}</p>
            </div>
            <div className="bg-blue-100 w-32 px-5 mx-auto rounded-lg hover:bg-blue-200">
                
                {currentUser && currentUser.admin? <Link to={`/products/${product.id}`}>Edit/Delete </Link>: <button onClick={e => addToCart(product)}>Add to <i class="icon-shopping-cart"></i></button>}

            </div>
        </ProductCard>
    )
}