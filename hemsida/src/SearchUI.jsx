import { useEffect, useState } from "react";
import "./SearchUI.css";

const SearchUI = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value) setProducts([]); // töm listan direkt i onChange
  };

  useEffect(() => {
    if (!searchTerm) return;

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div>
      <h2>Hitta produkter</h2>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Sök..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="product-list">
  {products.map((item, index) => (
    <li key={index} className="product-card">
      <img src={item.thumbnail} alt={item.title} />
      <div className="product-card-body">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
};

export default SearchUI;