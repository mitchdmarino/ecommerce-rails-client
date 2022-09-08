import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Login({ currentUser, setCurrentUser }) {
    // state for the controlled form 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            // post form data to the backend
            const reqBody = {
                email, 
                password
            }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, reqBody)
            // save the token in localstorage
            const { token } = response.data
            localStorage.setItem('jwt', token)
            // decode the token 
            const decoded = jwt_decode(token)
            // set the user in App's state to be the decoded token 
           setCurrentUser(decoded)
        } catch (err) {
            console.warn(err)
            if (err.response) {
                if (err.response.status===400) {
                    setMsg(err.response.data.msg)
                }
            }
        }
    }

    // conditionally render a navigate component 
    if (currentUser) {
        return <Navigate to='/profile' />
    }

    return (
        <div>
            <h1>Login</h1>
            <p> {msg}</p>
            <form onSubmit={handleSubmit} className="max-w-[500px] mx-auto">
                
            <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type='email'
                    name='email'
                    id='email'
                    value={email}
                    placeholder='example@domain.com'
                    onChange={(e) => setEmail(e.target.value)} 
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                    required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input type='text'
                    name='password'
                    id='password'
                    value={password}
                    placeholder='********'
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                    required />
                </div>
                <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
              
               
            </form>

           
            <p>
                Don't have an account? <span className='text-blue-500 hover:text-blue-800'><Link to="/register">Sign up here</Link></span>
            </p>
        </div>
    )
}