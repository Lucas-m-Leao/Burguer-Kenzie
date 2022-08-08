import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/cart';
import Data from './components/data/api';
import Header from './components/Header';
import ProductList from './components/ProductsList';
function App() {
  const [filter, setfilter] = useState([{}])
  const [cartList, setCartList] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    setfilter([cartList, ...filter])
    Data.get("/products")
      .then((res) => {
        setProducts(res.data)
      })
  }, [])
  return (
    <div className="App">
      <Header setfilter={setfilter} />
      <main>
        <ProductList item={products} cartList={cartList} setCartList={setCartList} filter={filter} />
        <Cart cartList={cartList} setCartList={setCartList} />
      </main>
    </div>
  );
}

export default App;
