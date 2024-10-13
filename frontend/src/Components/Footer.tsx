import { NavLink } from "react-router-dom"
import { FaInstagram } from "react-icons/fa6";
import { ImYoutube } from "react-icons/im";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div>

      <footer className="footer footer-center bg-black text-base-content rounded p-10 text-white">

      <nav>
    <div className="flex justify-center gap-10">

      <NavLink to="">
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

<div className="flex flex-col justify-center my-5">
    <p className="mx-auto">Fusion Chess</p>
    
    <p className="underline mx-auto">fusionchess64@gmail.com</p>
</div>

  <nav className="flex justify-center gap-4">
    <NavLink to="/" className="link link-hover">PRIVACY POLICY</NavLink>
    <NavLink to="/" className="link link-hover">TERMS & CONDITIONS</NavLink>
  </nav>

 

  <aside className="flex justify-center my-5">
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>

</footer>

    </div>
  )
}

export default Footer
