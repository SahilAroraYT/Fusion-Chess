import { NavLink } from "react-router-dom"
import { FaInstagram } from "react-icons/fa6";
import { ImYoutube } from "react-icons/im";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div>

      <footer className="footer footer-center bg-black rounded p-5 text-white">

      <nav>
    <div className="flex justify-center gap-10">

      <NavLink to="https://www.instagram.com/fusionchess/" target="_blank">
      <FaInstagram size={35} />
      </NavLink>

      <NavLink to="">
      <ImYoutube size={35} />
      </NavLink>

      <NavLink to="">
      <FaDiscord size={35} />
      </NavLink>

    </div>

  </nav>

<div className="flex flex-col justify-center">
    <p className="mx-auto">Fusion Chess</p>
    
    <p className="underline mx-auto">fusionchess64@gmail.com</p>
</div>

  <nav className="flex justify-center gap-4">
    <NavLink to="/" className="link link-hover">PRIVACY POLICY</NavLink>
    <NavLink to="/" className="link link-hover">TERMS & CONDITIONS</NavLink>
  </nav>

 

  <aside className="flex justify-center">
    <p>Copyright © {new Date().getFullYear()} - All rights reserved by Fusion Chess </p>
  </aside>

</footer>

    </div>
  )
}

export default Footer
