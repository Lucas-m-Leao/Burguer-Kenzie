import "./styles.css";
const Product = ({ item, value }) => {
  return (
    <>
      {item.estoque > 0 && (
        <li className="card">
          <div className="cardImg">
            <img src={item.img} alt="" />
          </div>

          <div className="cardText">
            <h2>{item.name}</h2>
            <p className="cad">{item.category}</p>
            <p className="preco">R${item.price}</p>
            <button id={item.id} onClick={(e) => value(e.target.id)}>
              Adicionar
            </button>
          </div>
        </li>
      )}
    </>
  );
};
export default Product;
