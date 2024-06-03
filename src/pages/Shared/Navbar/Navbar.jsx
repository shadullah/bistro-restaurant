import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <>
      <nav className="fixed z-10 py-6 bg-black/40 text-white w-full">
        <div className="flex justify-between mx-12">
          <div className="flex justify-between items-center w-full">
            <Link to="/">
              <div className="text-sm md:text-2xl text-white font-extrabold">
                <img
                  style={{ mixBlendMode: "multiply" }}
                  className="h-6 inline"
                  src="https://img.freepik.com/free-photo/slice-fresh-pizza-with-pepperoni-white_144627-24389.jpg?w=826&t=st=1703012006~exp=1703012606~hmac=f4b57bc061bf61e6528d5c39779bf9496d47b3c37a3206049138c1bcebbb8e40"
                  alt="#"
                />
                Conic Pizza Hut
              </div>
            </Link>

            <div
              className="md:hidden block cursor-pointer"
              onClick={toggleMenu}
            >
              <RiMenuFill />
            </div>
          </div>
          <div className="">
            <ul
              className={`md:flex md:items-center text-sm md:text-xl md:static absolute w-full md:w-auto left-0 py-6 md:py-0 pl-7 md:pl-0 opacity-0 md:opacity-100 transition-all ease-in duration-500  text-white font-semibold ${
                isMenuOpen
                  ? "opacity-100 top-[60px] block bg-gray-500"
                  : "hidden"
              }  `}
            >
              <li className="mx-4 my-6 md:my-0">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link to="/about">About</Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link to="/menu">Reservation</Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link to="/dashboard/payment">Dashboard</Link>
              </li>
              {user ? (
                <>
                  <li className="mx-4 my-6 md:my-0">
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="mx-4 my-6 md:my-0">
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
