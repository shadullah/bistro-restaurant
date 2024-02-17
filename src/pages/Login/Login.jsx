import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((res) => {
      const user = res.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Logged in Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold my-12">Login Page</h1>
      <div className="mx-auto">
        <form
          onSubmit={handleLogin}
          className="bg-gray-100 shadow-lg rounded-lg px-16 py-16"
        >
          <div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
              />
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                password
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <input
              className="bg-yellow-400 px-5 p-2 rounded-lg font-bold"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <p>
          New Here?{" "}
          <Link to="/signup" className="underline">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
