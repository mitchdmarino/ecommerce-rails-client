import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function ProductsForm ({initialForm, productId}) {
    const navigate = useNavigate()

    // form state
    const [form, setForm] = useState(initialForm)
    
    useEffect(() => {
        setForm(initialForm)
    }, [initialForm])

    // get the token from local storage 
    const token = localStorage.getItem('jwt')
    // make the auth headers 
    const options = {
        headers: {
            'Authorization': token
        }
    }

    // On form submission, call the API product creation route
    const handleSubmit = (e) => {
        e.preventDefault()
        const createProduct = async () => {
            try {
                // hit the auth locked endpoint
                await axios.post(`${process.env.REACT_APP_SERVER_URL}/products`, form, options)
                setForm(initialForm)
            } catch (err) {
                console.warn(err)
            }
        }
        
        const editProduct = async () => {
            try {
                // get the token from local storage 
                const token = localStorage.getItem('jwt')
                // make the auth headers 
                const options = {
                    headers: {
                            'Authorization': token
                        }
                    }
                // hit the auth locked endpoint
                await axios.put(`${process.env.REACT_APP_SERVER_URL}/products/${productId}`, form, options)
    
            } catch (err) {
                        console.warn(err)
            }
        }
        productId ? editProduct(): createProduct()
        navigate("/products")
    }

    const handleDelete = () => {
        // get the token from local storage 
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/products/${productId}`, options)
            .catch(err => {
                console.warn(err)
            })
        navigate("/products")
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
                <label htmlFor="price">price</label>
                <input type="number" name="price" id="price" value={form.price} onChange={e => setForm({...form, price: e.target.value})}/>
                <label htmlFor="description">description</label>
                <input type="text" name="description" id="description" value={form.description} onChange={e => setForm({...form, description: e.target.value})}/>
                <button type="submit">Submit</button>
            </form>
            {productId? <button onClick={handleDelete}>Delete Product</button>: ''}

        </div>
    )
}