import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Signup = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(
        data.name,
        data.photoURL,
        data.mobile,
        data.cadetship,
        data.cadetNo,
        data.rank,
        data.institute,
        data.address
      )
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            cadetship_year: data.cadetship,
            cadet_no: data.cadetNo,
            rank: data.rank,
            institute: data.institute,
            address: data.address,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            errors.email = "email already in use";
          } else {
            console.error(error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong. Please try again.",
            });
          }
        });
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold my-12">Signup Page</h1>

      <div className="mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-100 shadow-lg rounded-lg px-16 py-16"
        >
          <div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                placeholder="type your name"
                {...register("name", { required: true })}
                type="text"
              />
              {errors.name && (
                <span className="text-red-700">Name is required</span>
              )}
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                Mobile No.
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="01********"
                {...register("mobile", { required: true, maxLength: 11 })}
                type="number"
              />
              {errors.mobile && (
                <span className="text-red-700">Number is required</span>
              )}
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                Photo URL
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="share your photo here"
                {...register("photoURL", { required: true })}
                type="text"
              />
              {errors.photoURL && (
                <span className="text-red-700">Photo URL is required</span>
              )}
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="type your email"
                {...register("email", { required: true })}
                name="email"
                type="email"
              />
              {errors.email && (
                <span className="text-red-700">Email is required</span>
              )}
              {errors.email && (
                <span className="text-red-700">{errors.email}</span>
              )}
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                Cadetship Year
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="date"
                {...register("cadetship", { required: true })}
                type="date"
              />
              {errors.cadetship && (
                <span className="text-red-700">Cadetship date is required</span>
              )}
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                Cadet Number
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Cadet Number"
                {...register("cadetNo", { required: true })}
                type="Number"
              />
              {errors.cadetNo && (
                <span className="text-red-700">Cadet Number is required</span>
              )}
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                Rank
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Rank"
                {...register("rank", { required: true })}
                type="text"
              />
              {errors.rank && (
                <span className="text-red-700">Rank is required</span>
              )}
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                Institute
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Institute"
                {...register("institute", { required: true })}
                type="text"
              />
              {errors.institute && (
                <span className="text-red-700">Institute is required</span>
              )}
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                Address
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Address"
                {...register("address", { required: true })}
                type="text"
              />
              {errors.address && (
                <span className="text-red-700">Address is required</span>
              )}
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-yellow-800 text-xs font-bold mb-2">
                password
              </label>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="type your password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                type="password"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-700">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-700">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-700">
                  Password must be 1 lower case, 1 Uppercase and a special
                  character
                </span>
              )}
            </div>
          </div>
          <div className="text-center mt-6">
            <input
              className="bg-yellow-400 px-5 p-2 rounded-lg font-bold cursor-pointer"
              type="submit"
              value="Signup"
            />
          </div>
        </form>
        <p>
          Have account?{" "}
          <Link to="/login" className="underline">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
