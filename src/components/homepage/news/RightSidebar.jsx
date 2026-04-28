import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h2 className='font-bold text-lg mb-4'>Login With</h2>
           <div className='flex flex-col gap-2'>
             <button className='btn border-blue-500 text-blue-500'> <FaGoogle />Login with google</button>
            <button className='btn'> <FaGithub />Login with github</button>
           </div> 
            <h2 className='font-bold text-lg m-4'>Find Us On</h2>
           <div className='flex flex-col gap-2'>
             <button className='btn '> <FaFacebookF />Facebook</button>
            <button className='btn'> <FaTwitter />Twitter</button>
            <button className='btn'> <FaInstagram />Instagram</button>
           </div> 


        </div>
    );
};

export default RightSidebar;
