import "../App.css"

import Camisa from "../assets/Camisa.png"
import Sapato from "../assets/Sapato.png"
import Fones from "../assets/Fone.png"

function Colections() {
  return (
    <section id="colecoes-container">
      <h2>Coleções em destaque</h2>

      <div id="cards-container">
        <div className="card">
          <span className="discount">30% OFF</span>
          <h3>Novo drop <br /> Supreme</h3>
          <img src={Camisa} alt="Supreme" />
          <button>Comprar</button>
        </div>

        <div className="card">
          <span className="discount">30% OFF</span>
          <h3>Coleção <br /> Adidas</h3>
          <img src={Sapato} alt="Adidas" />
          <button>Comprar</button>
        </div>

        <div className="card">
          <span className="discount">30% OFF</span>
          <h3>Novo <br /> Beats Bass</h3>
          <img src={Fones} alt="Beats" />
          <button>Comprar</button>
        </div>
      </div>
    </section>
  )
}

export default Colections
