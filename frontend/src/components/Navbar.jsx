import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets_frontend/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/doctors'>
          <li className='py-1'>All Doctors</li>
          <hr className='border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/about'>
          <li className='py-1'>About Us</li>
          <hr className='border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to='/contact'>
          <li className='py-1'>Contact Us</li>
          <hr className='border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {
          token 
          ? <div className='flex items-center gap-2 cursor-pointer group relative' onClick={() => setShowMenu(!showMenu)}>
              <img src={assets.profile_pic} alt='Profile' className='w-8 rounded-full'/>
              <img src={assets.dropdown_icon} alt='Dropdown' className='w-2.5 '/>
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'> 
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '> 
                   <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                   <p onClick={()=>navigate('my-appoinment')} className='hover:text-black cursor-pointer'>My Appoinment</p>
                   <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
              </div>
            </div>
          : <button 
              onClick={() => navigate('/login')} 
              className='bg-blue-300 text-white px-8 py-3 rounded-full font-light hidden md:block'>
              Create account
            </button>
        }
      </div>
    </div>
  );
};

export default Navbar;
