import axios from "axios";
// import { config } from "localforage";
import { ToastContainer, toast } from "react-toastify";
import { Config } from "../config/Config";

export default function Homee() {
  const bkashPaymentHandler = async () => {
    try {
      const result = await axios.post(Config?.baseUrl + "api/bkash/create");

      if (result?.data?.status) {
        window.location.href = result?.data?.data?.data?.bkashURL;
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center mt-[100px]">
      <ToastContainer />
      <button
        className="bg-blue-500 text-white px-3 py-2 rounded-md"
        onClick={bkashPaymentHandler}
      >
        Pay With Bkash
      </button>
    </div>
  );
}
