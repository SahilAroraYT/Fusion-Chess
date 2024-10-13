// This navbar uses TailwindCSS
// Add this in your index.html 
//  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>

import { NavLink } from 'react-router-dom';
import { useState } from 'react'


const Navbar = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Services",link:"/services"},
      {name:"Pricing",link:"/pricing"},
      {name:"Contact us",link:"/contact"},
      {name:"FAQ's",link:"/faq"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-[#4C5F72] py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
        Fusion Chess
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#4C5F72] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <NavLink to={link.link} className={({ isActive }) => 
                    isActive 
                      ? 'text-[#60A9D7] hover:text-gray-400 duration-500 '  // Active state styles
                      : 'text-white hover:text-gray-400 duration-500' // Non-active state styles
                  }>{link.name} </NavLink>
            </li>
          ))
        }
        <button className="btn bg-[#2D4766] rounded-xl text-white px-8 md:ml-6">Register !!! <br />( Free Trial )</button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar