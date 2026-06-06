function Order({ name, email }) {
  return (
    <div className="bg-gray-700 p-6 rounded-xl mt-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-pink-400">Tack för din beställning! </h2>
      <p className="text-lg">Hej <span className="font-bold">{name}</span>!</p>
      <p className="text-gray-300 mt-2">En orderbekräftelse skickas till <span className="font-bold">{email}</span> snart.</p>
    </div>
  );
}

export default Order;