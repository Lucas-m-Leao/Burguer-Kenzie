import { useState } from "react";
import logo from "../assets/img/logo.svg";
import "./styles.css";
const Header = ({ setfilter }) => {
  const [data, setData] = useState("");
  const filtro = () => setfilter(data);
  return (
    <header>
      <span className="contImg">
        <img src={logo} alt="" />
      </span>
      <span className="contPesquisa">
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(e) => setData(e.target.value.toLowerCase())}
        />
        <button onClick={filtro}>Pesquisar</button>
      </span>
    </header>
  );
};
export default Header;
