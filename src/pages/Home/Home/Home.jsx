import Products from "../../products/Products/Products";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="text-3xl my-5">
      <Banner></Banner>
      <Products></Products>
      This is home
    </div>
  );
};

export default Home;
