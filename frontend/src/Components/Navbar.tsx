import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
    { name: "FAQ's", link: "/faq" },
  ];

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-[#000000] py-4 md:px-10 px-7 z-50">
        <div className="font-bold text-2xl ml-5 cursor-pointer flex items-center font-[Poppins] text-white">
          <NavLink to="/">
          <span className="w-auto">
            <img
              src="/logo.svg"
              className="w-40 md:w-40 lg:w-40 sm:w-44 max-w-full"
              alt="Fusion Chess"
            />
          </span>
          </NavLink>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute left-3 top-4 cursor-pointer md:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div className="absolute right-5 top-4 md:hidden">
          <button className="btn bg-[#2D4766] rounded-xl text-white px-8 -mt-1">
            <NavLink to="/register">
              Register !!! <br />
              ( Free Trial )
            </NavLink>
          </button>
        </div>

        <ul
          ref={menuRef}
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#000000] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#60A9D7] hover:text-gray-400 duration-500"
                    : "text-white hover:text-gray-400 duration-500"
                }
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <NavLink to="/register">
            <button className="btn bg-[#2D4766] rounded-xl text-white px-8 md:ml-6">
              Register !!! <br />
              (Free Trial)
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;