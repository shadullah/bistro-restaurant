import khawon from "../../../assets/menu/pizza-bg.jpg";
import axios from "axios";

const Products = () => {
  const pay = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/bkash/payment/create",
        { amount: 50, orderId: 1 },
        { withCredentials: true }
      );
      window.location.href = data.bkashURL;
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // const handleOrder = async () => {
  //   try {
  //     await axios
  //       .post("http://localhost:5000/bkash-checkout", {
  //         amount: 10,
  //         callbackURL: "http://localhost:5000/bkash-callback",
  //         orderID: "01",
  //         reference: "01",
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         window.location.href = res?.data;
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <div className="banner my-12">
        <h1 className="text-5xl uppercase font-bold text-center underline">
          Our Menus
        </h1>
      </div>
      <h1 className="text-3xl mx-auto font-extrabold text-center my-12">
        Menus
      </h1>

      <div className="my-12">
        <div className="p-5 w-1/2">
          <img className="mx-auto w-64 rounded-lg" src={khawon} alt="#" />
        </div>
        <div className="w-1/2 p-5">
          <div className="">
            <h1 className="my-2 text-5xl font-bold tracking-tight">Pizza</h1>

            <h3 className="py-3 text-3xl font-medium italic text-gray-900">
              Price: 460
            </h3>
          </div>

          <div className="flex my-5">
            <div className="w-3 h-10 p-1 mr-2 bg-blue-800"></div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium tempore error pariatur, provident esse perspiciatis,
              cumque assumenda quis quibusdam quisquam labore delectus et ex
              harum, facilis dolores illum voluptatibus quidem?
            </p>
          </div>

          <button
            className="bg-yellow-800 px-10 py-3 rounded-lg text-white text-center"
            onClick={pay}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
