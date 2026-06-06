import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import Checkout from "../components/checkOut";

function CartPage({ cart, setCart }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link
        to="/"
        className="inline-block mb-6 text-gray-400 hover:text-white"
      >
        ← Fortsätt handla
      </Link>
      <Cart cart={cart} setCart={setCart} setIsOpen={setIsOpen} />
      <Checkout isOpen={isOpen} setIsOpen={setIsOpen} setCart={setCart} />
    </div>
  );
}

export default CartPage;