import { useState } from "react";
import Order from "./Order";

function Checkout({ isOpen, setIsOpen, setCart }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [ordered, setOrdered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrdered(true);
    setCart([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-2xl w-full max-w-md relative">

        <button
          onClick={() => {
            setIsOpen(false);
            setOrdered(false);
          }}
          className="absolute top-4 right-4"
        >
          ✕
        </button>

        {ordered ? (
          <Order name={name} email={email} />
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Namn"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded bg-gray-700"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded bg-gray-700"
              />
              <input
                type="text"
                placeholder="Adress"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full p-3 rounded bg-gray-700"
              />
              <button
                type="submit"
                className="w-full bg-linear-to-r from-purple-400 via-pink-500 to-red-500 py-3 rounded-xl"
              >
                Slutför köp
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;