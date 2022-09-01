import { Link } from 'react-router-dom'

export default function Navbar( {currentUser, handleLogout} ) {
    const loggedIn = (
        <>
            {/* if the user is logged out .. */}
            <Link to='/'>
                <span onClick={handleLogout}>Logout</span>
            </Link>{' | '}
            <Link to='/profile'>
                Profile
            </Link>{' | '}
            <Link to='/orders'>
                Orders
            </Link>
        </>
    )

    const loggedOut = (
        <>
            {/* if the user is not logged in  */}
            <Link to='/register'>Register</Link>{' | '}
            <Link to='/login'>Login</Link>
        </>
    )
    return (
        <nav>
            {/* user always sees this section */}
            <Link to='/'>
                <p>Home</p>
            </Link>
            <Link to='/products'>
                <p>Products</p>
            </Link>
            <Link to='/cart'>
                <p>Cart</p>
            </Link>
            {
                currentUser ? 
                loggedIn: loggedOut
            }
        </nav>
    )
}