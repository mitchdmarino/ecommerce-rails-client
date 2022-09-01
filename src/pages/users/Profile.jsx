import {useState, useEffect} from 'react'
import axios from 'axios'

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
                if(err.response) {
                    if (err.response.status===401) {
                        handleLogout()
                    }
                }
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

        <div>
            <h1>Hello {currentUser.name}</h1>
            
            <p>Email: {currentUser.email}</p>

            {currentUser.admin? <h1>ADMIN 😼</h1> : <h1>normal 😿</h1>}

            {userList}
            
        </div>
    )
}