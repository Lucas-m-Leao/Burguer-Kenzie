import TotalPrice from "../Total Price";
import "./styles.css";

const Cart = ({ cartList, setCartList }) => {
  const remove = (id) => {
    const index = cartList.findIndex((element) => element.id === Number(id));
    const remover = cartList.filter((element) => element.id !== Number(id));
    if (
      cartList[index].contador === undefined ||
      cartList[index].contador === 1
    ) {
      setCartList(remover);
    } else if (cartList[index].contador > 1) {
      const retirar = cartList.map((element) => {
        if (Number(id) === element.id) {
          element.contador--;
        }
        return element;
      });
      setCartList(retirar);
    }
  };
  return (
    <div className="conteinerCarrinho">
      <div className="contCarrinho">
        <h2>Carrinho de compras</h2>
      </div>
      {cartList.toString() === "" ? (
        <>
          <h2 className="tituloVazio">Sua sacola está vazia</h2>
          <p className="paragrafoVazio">Adicione itens</p>
        </>
      ) : (
        <>
          <ul className="conteinerUl">
            {cartList.map((element) => (
              <li key={element.id} className="listaCarrinho">
                <div className="CardImg">
                  <img src={element.img} alt="" />
                </div>
                <div className="conteinerText">
                  <h2>{element.name}</h2>
                  <p>{element.category}</p>
                  <p>{element.contador}</p>
                </div>
                <button id={element.id} onClick={(e) => remove(e.target.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <TotalPrice cartList={cartList} />
          <button onClick={() => setCartList([])}>Retirar Tudo</button>
        </>
      )}
    </div>
  );
};
export default Cart;
