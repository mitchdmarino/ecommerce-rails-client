import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function ProductsForm () {
    const navigate = useNavigate()

    // form state 
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    // On form submission, call the API product creation route
    const handleSubmit = (e) => {
        e.preventDefault()
        const createProduct = async () => {
            try {
                const reqBody = {
                    name,
                    price,
                    description
                }
                // get the token from local storage 
                const token = localStorage.getItem('jwt')
                // make the auth headers 
                const options = {
                    headers: {
                        'Authorization': token
                    }
                }
                // hit the auth locked endpoint
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/products`, reqBody, options)
                console.log(response)
    
            } catch (err) {
                console.warn(err)
            }
        }
        createProduct()
        navigate("/products")
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="price">price</label>
                <input type="number" name="price" id="price" value={price} onChange={e => setPrice(e.target.value)}/>
                <label htmlFor="description">description</label>
                <input type="text" name="description" id="description" value={description} onChange={e => setDescription(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}