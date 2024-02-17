import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-full bg-yellow-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li className="p-4 font-bold bg-yellow-700 m-2 rounded-lg text-white">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="p-4 font-bold bg-yellow-700 m-2 rounded-lg text-white">
                <NavLink className="underline" to="/dashboard/users">
                  ALL Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="p-4 font-bold bg-yellow-700 m-2 rounded-lg text-white">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="p-4 font-bold bg-yellow-700 m-2 rounded-lg text-white">
                <NavLink to="/dashboard/payment">Payment details</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
