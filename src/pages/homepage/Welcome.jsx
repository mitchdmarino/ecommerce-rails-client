import * as React from 'react'
import Featured from './Featured'
// import Deals from './Deals'



export default function Welcome() {
    return (
        <div className='mx-20 '>
            <h1 className='text-6xl my-10'>Mughub</h1>
            <p className='text-3xl pb-10'>Mugs for all! The widest selection of mugs for the best prices!</p>

            <Featured/>
           
            
        </div>
    )
}