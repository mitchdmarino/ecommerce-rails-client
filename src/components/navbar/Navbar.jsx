import { Link } from 'react-router-dom'
import { Navbar as Nav, Dropdown, Avatar } from 'flowbite-react'



export default function Navbar( {currentUser, handleLogout} ) {

    const evt = new Event("DOMContentLoaded", { bubbles: true, cancelable: false });
    document.dispatchEvent(evt);
    
    const loggedIn = (
        <> 
                <Link to="/cart" className="block text-lg   py-2 pr-4 pl-3 text-[#1A1B41] border-b border-[#03254E] hover:bg-[#F1FFE7] md:hover:bg-transparent md:border-0 md:hover:text-[#F1FFE7] md:p-0">Cart</Link>
                               
                <Link to="/profile" className="block text-lg  py-2 pr-4 pl-3 text-[#1A1B41] border-b border-[#03254E] hover:bg-[#F1FFE7] md:hover:bg-transparent md:border-0 md:hover:text-[#F1FFE7] md:p-0">Account</Link>

                <Link to="/" className="block text-lg  py-2 pr-4 pl-3 text-[#1A1B41] border-b border-[#03254E] hover:bg-[#F1FFE7] md:hover:bg-transparent md:border-0 md:hover:text-[#F1FFE7] md:p-0" onClick={handleLogout}>Logout</Link>
        </>
    )

    const loggedOut = (
        <>
            {/* if the user is not logged in  */}
            
                <Link to="/register" className="block text-lg  py-2 pr-4 pl-3 text-[#1A1B41] border-b border-[#03254E] hover:bg-[#F1FFE7] md:hover:bg-transparent md:border-0 md:hover:text-[#F1FFE7] md:p-0">Create Account</Link>
            
            
                <Link to="/login" className="block text-lg  py-2 pr-4 pl-3 text-[#1A1B41] border-b border-[#03254E] hover:bg-[#F1FFE7] md:hover:bg-transparent md:border-0 md:hover:text-[#F1FFE7] md:p-0">Sign In</Link>
        
           
        </>
    )
    return (
        
        <Nav fluid={true} rounded={true} style={{backgroundColor: '#8C86AA' , justifyContent: 'center'}}>
            <Nav.Brand href='/'>
                <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-l from-[#C2E7DA] to-[#F1FFE7] self-center whitespace-nowrap p-1">
                    Ecommerce
                </span>
            </Nav.Brand>
            <Nav.Toggle style={{backgroundColor: '#F1FFE7' , marginLeft: 10}}/>
                <Nav.Collapse>
                    <Link to="/" className="block text-lg  py-2 pr-4 pl-3 text-[#1A1B41] border-b border-[#03254E] hover:bg-[#F1FFE7] md:hover:bg-transparent md:border-0 md:hover:text-[#F1FFE7] md:p-0">Home</Link>
                        
                    <Link to="/products" className="block text-lg  py-2 pr-4 pl-3 text-[#1A1B41] border-b border-[#03254E] hover:bg-[#F1FFE7] md:hover:bg-transparent md:border-0 md:hover:text-[#F1FFE7] md:p-0">Products</Link>
                   
                    {currentUser? loggedIn: loggedOut}
                </Nav.Collapse>
                
                
           
            

            
            
        </Nav>
    )
}