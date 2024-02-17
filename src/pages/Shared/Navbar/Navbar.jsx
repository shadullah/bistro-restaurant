import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

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
      <nav className="p-5 fixed z-10 md:flex md:items-center justify-between px-12 text-white bg-yellow-400">
        <div className="flex justify-between items-center">
          <Link to="/">
            <span className="text-2xl text-white font-extrabold">
              <img
                style={{ mixBlendMode: "multiply" }}
                className="h-6 inline"
                src="https://img.freepik.com/free-photo/slice-fresh-pizza-with-pepperoni-white_144627-24389.jpg?w=826&t=st=1703012006~exp=1703012606~hmac=f4b57bc061bf61e6528d5c39779bf9496d47b3c37a3206049138c1bcebbb8e40"
                alt="#"
              />
              Conic Pizza Hut
            </span>
          </Link>

          <span className="md:hidden block cursor-pointer" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </span>
        </div>
        <div className="">
          <ul
            className={`md:flex md:items-center text-xl md:static absolute w-full md:w-auto left-0 py-6 md:py-0 pl-7 md:pl-0 opacity-0 md:opacity-100 transition-all ease-in duration-500  text-white font-semibold ${
              isMenuOpen ? "opacity-100 top-[80px] bg-gray-300" : "opacity-0"
            }  `}
          >
            <li className="mx-4 my-6 md:my-0">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link to="/menu">Menu Items</Link>
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
      </nav>
    </>
  );
};

export default Navbar;
