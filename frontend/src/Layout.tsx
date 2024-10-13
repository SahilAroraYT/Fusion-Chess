import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar.tsx';
import Footer from './Components/Footer.tsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
