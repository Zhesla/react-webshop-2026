function Cart({ cart = [], setCart, setIsOpen }) {
  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="text-3xl font-bold mb-6">Min varukorg</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400">Kundvagnen är tom.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="bg-gray-700 p-4 rounded mb-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl">{item.title}</h3>
              <p>{item.price} kr x {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-400 hover:text-red-600"
            >
              Ta bort
            </button>
          </div>
        ))
      )}

      <div className="text-right mt-4">
        <p className="text-xl font-bold mb-4">Totalt: {totalPrice.toFixed(2)} kr</p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500 px-6 py-3 rounded-xl"
        >
          Beställ
        </button>
      </div>
    </div>
  );
}

export default Cart;