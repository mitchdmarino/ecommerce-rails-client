import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button} from 'flowbite-react'

export default function Profile({currentUser, handleLogout}) {
    // state for the secret message (aka user privileged data )
    const [users, setUsers] = useState([])
    // useEffect for getting the user data and checking auth 
    useEffect(() => {
        const getUsers = async () => {
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
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`, options)
                // set the secret user message in state 
                setUsers(response.data)
    
            } catch (err) {
                // if the error is 401, the auth failed
                console.warn(err)
            }
        }
        getUsers()
    }, [])
    let userList = null
    if (users.length>0) {
        userList = users.map((user,i) => {
            return (
                <div key={i}>
                <h1>{user.username}</h1>
                <p>{user.name}</p>
                </div>
                
            )
        })
    }

    return (

        <div className='p-10'>
            <h1 className='text-left text-4xl '>Welcome {currentUser.name}, see your account details here:</h1>
            
            <p className='text-left py-10 text-2xl'><strong>Name:</strong> {currentUser.name}</p>
            <p className='text-left py-10 text-2xl'><strong>UserName:</strong> {currentUser.username}</p>
            <p className='text-left py-10 text-2xl'><strong>Email:</strong> {currentUser.email}</p>
            <p className='text-left py-10 text-2xl'><strong>Status:</strong> {currentUser.admin?' YOU ARE AN ADMIN 😼': 'Customer'}</p>
            <Button><Link className="text-xl" to="/orders">{currentUser.admin? 'Update Orders': 'My Orders'}</Link></Button>

            

            {/* {userList} */}
            
        </div>
    )
}