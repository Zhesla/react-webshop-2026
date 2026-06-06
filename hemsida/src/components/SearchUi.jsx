import { useEffect, useState } from 'react';
import '../SearchUI.css';
import { useDebounce } from '../hooks/useDebounce';
import { useNavigate } from 'react-router-dom';



const SearchUI = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 6);
  const debouncedSearch = useDebounce(searchTerm, 300);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value) setProducts([]);
  };

  // Hämta kategorier
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products/categories');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  // Hämta produkter
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url;
        if (debouncedSearch) {
          url = `https://dummyjson.com/products/search?q=${debouncedSearch}`;
        } else if (selectedCategory) {
          url = `https://dummyjson.com/products/category/${selectedCategory}`;
        } else {
          url = `https://dummyjson.com/products`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [debouncedSearch, selectedCategory]);

  return (
    <div>
      <div className="text-center">
        <h2 className="md:text-9xl sm:text-2xl bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-500 to-red-500">
          Sök eller sortera produkter
        </h2>
      </div>

      <div className="flex pt-10 justify-center max-w-md mx-auto">
        <input
          className="w-full p-2 border border-gray-300 rounded mb-4 bg-gray-800"
          type="text"
          placeholder="Sök..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Kategoriknappar */}
    <div className="category-list">
      <button
         className={`category-btn ${selectedCategory === '' ? 'active' : ''}`}
         onClick={() => setSelectedCategory('')}
       >
         Alla
        </button>
         {visibleCategories.map((cat) => (
        <button
        key={cat.slug}
        className={`category-btn ${selectedCategory === cat.slug ? 'active' : ''}`}
       onClick={() => setSelectedCategory(cat.slug)}
    >
      {cat.name}
      </button>
  ))}
  <button
    className="category-btn"
    onClick={() => setShowAll(!showAll)}
  >
    {showAll ? 'Visa färre ↑' : 'Visa fler ↓'}
  </button>
</div>

      <div className="p-4 justify-center">
        <ul className="product-list bg-white mx-auto max-w-7xl">
          {products.map((item, index) => (
            <li
              key={index}
              className="product-card cursor-pointer"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img src={item.thumbnail} alt={item.title} />
              <div className="product-card-body">
                <h2>{item.title}</h2>
                <p className='line-clamp-2'>{item.description}</p>
                <p className='text-lg font-bold text-green-500'>{item.price} kr</p>
              </div>
              <button onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}>
                Lägg i varukorg
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchUI;