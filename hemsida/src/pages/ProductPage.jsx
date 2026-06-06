import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Kunde inte hämta produkten.");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <p className="text-red-400 text-center mt-10">{error}</p>;
  if (!product) return <p className="text-white text-center mt-10">Laddar...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 max-w-2xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-gray-400 hover:text-white"
      >
        ← Tillbaka
      </button>

      <img src={product.thumbnail} alt={product.title} className="w-full rounded-xl mb-6" />

      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-300 mb-4">{product.description}</p>
      <p className="text-2xl font-bold text-green-400 mb-6">{product.price} kr</p>

      <button
        onClick={() => {
          addToCart(product);
          navigate("/cart");
        }}
        className="w-full bg-linear-to-r from-purple-400 via-pink-500 to-red-500 py-3 rounded-xl text-lg"
      >
        Lägg i varukorg
      </button>
    </div>
  );
};

export default ProductPage;