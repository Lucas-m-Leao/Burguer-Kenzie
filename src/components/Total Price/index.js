import "./styles.css"
const TotalPrice = ({ cartList }) => {
    const totalPrice = cartList.reduce((previousValue, currentValue) => {
        return currentValue.contador * currentValue.price + previousValue
    }, 0)

    return (
        <div className=" totalPrice">
            <p className="total">Total</p>
            <p className="valor">R${totalPrice.toFixed(2)}</p>
        </div>
    )
}
export default TotalPrice