import React from 'react'
import {GiSandsOfTime} from 'react-icons/gi'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='m-auto d-flex justify-content-center align-items-center '>
           <Link to='/more'> <button className='btn btn-primary'>
                <GiSandsOfTime/> More
            </button></Link>


    </div>
  )
}

export default Footer