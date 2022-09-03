import { Link } from 'react-router-dom'
import { Navbar as Nav, Dropdown, Avatar } from 'flowbite-react'



export default function Navbar( {currentUser, handleLogout} ) {

    const evt = new Event("DOMContentLoaded", { bubbles: true, cancelable: false });
    document.dispatchEvent(evt);
    
    const loggedIn = (
        <>
            {/* if the user is logged out .. */}
            <Dropdown.Header>
                <span className="block text-sm">
                {currentUser && currentUser.name}
                </span>
                <span className="block truncate text-sm font-medium">
                {currentUser && currentUser.email}
                </span>
            </Dropdown.Header>
            <Dropdown.Item>
                <Link to="/" className="block py-2 px-4 text-sm text-black-500 hover:bg-orange-400 " onClick={handleLogout}>Logout</Link>
            </Dropdown.Item>
            <Dropdown.Item >
                <Link to="/profile" className="block py-2 px-4 text-sm text-black-500 hover:bg-orange-400 ">Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to="/orders" className="block py-2 px-4 text-sm text-black-500 hover:bg-orange-400 ">Orders</Link>
            </Dropdown.Item>                   
        </>
    )

    const loggedOut = (
        <>
            {/* if the user is not logged in  */}
            <Dropdown.Item>
                <Link to="/register" className="block py-2 px-4 text-sm text-black-500 hover:bg-orange-400 ">Register</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to="/login" className="block py-2 px-4 text-sm text-black-500 hover:bg-orange-400 ">Log In</Link>
            </Dropdown.Item>
            
        
        
           
        </>
    )
    return (
        
        <Nav fluid={true} rounded={true} style={{backgroundColor: '#FFC09F'}}>
            <Nav.Brand href='/'>
                <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-l from-orange-400 to-red-500 self-center whitespace-nowrap p-1">
                    Ecommerce
                </span>
            </Nav.Brand>
            
            
            
            <div className="flex md:order-2">
                <Dropdown
                arrowIcon={false}
                inline={true}
                label={<Avatar alt="User settings" img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" rounded={true}/>}
                >
                
                {currentUser? loggedIn: loggedOut}
                </Dropdown>
                <Nav.Toggle style={{backgroundColor: '#FCF5C7' , marginLeft: 10}}/>
            </div>
            

            <Nav.Collapse>
                <Link to="/" className="block py-2 pr-4 pl-3 text-black-700 border-b border-red-700 hover:bg-orange-400 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0">Home</Link>
                    
                <Link to="/products" className="block py-2 pr-4 pl-3 text-black-700 border-b border-red-700 hover:bg-orange-400 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0">Products</Link>
                
                <Link to="/cart" className="block py-2 pr-4 pl-3 text-black-700 border-b border-red-700 hover:bg-orange-400 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0">Cart</Link>
            </Nav.Collapse>
            
        </Nav>
    )
}