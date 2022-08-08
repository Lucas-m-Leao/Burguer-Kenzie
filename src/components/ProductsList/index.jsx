import Product from "../Product";
import "./styles.css";
const ProductList = ({ item, setCartList, cartList, filter }) => {
  const Value = (id) => {
    const data = item.find((element) => Number(id) === element.id);
    const index = cartList.findIndex((element) => Number(id) === element.id);
    if (index === -1) {
      data.contador = 1;
      setCartList([...cartList, data]);
    } else if (data.contador >= 1) {
      const retirar = cartList.map((element) => {
        if (Number(id) === element.id) {
          element.contador++;
        }
        return element;
      });
      setCartList(retirar);
    }
  };
  return (
    <ul className=" container">
      {item.map((element) => {
        if (
          element.category.toLowerCase().includes(filter) ||
          element.name.toLowerCase().includes(filter)
        ) {
          return <Product item={element} key={element.id} value={Value} />;
        } else if (filter === "") {
          return <Product item={element} key={element.id} value={Value} />;
        }
      })}
    </ul>
  );
};
export default ProductList;
