import SearchUI from "../components/SearchUI";
import { Link } from "react-router-dom";

const Home = ({ addToCart, cart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <div className="w-full h-10">
        <div className="text-right pt-5 pr-5">
          <Link
            to="/cart"
            className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 px-4 rounded relative"
          >
            Min varukorg
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-pink-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div>
        <h1>Välkommen till vår butik</h1>
      </div>
      <div className="flex flex-col items-center">
        <SearchUI addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Home;