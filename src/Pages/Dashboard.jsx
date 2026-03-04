import Header from "../Components/Header"
import Sidebar from "../Components/Sidebar"
import ItemDetail from "../Components/ItemDetail"

function OrdersPage() {
  return (
    <>
      <Header />

      <nav className="menu">
        <a>Home</a>
        <a>Produtos</a>
        <a>Categorias</a>
        <a className="active">Meus Pedidos</a>
      </nav>

      <main className="container">
        <Sidebar />

        <section className="orders">
          <div className="orders-header">
            <h3>Meus Pedidos</h3>
            <span>STATUS</span>
          </div>

          <ItemDetail
            numero="2234981932"
            status="Produto em trânsito"
            statusClass="transit"
          />

          <ItemDetail
            numero="4495810492"
            status="Finalizado"
            statusClass="done"
          />

          <ItemDetail
            numero="4495810492"
            status="Cancelado"
            statusClass="cancel"
          />
        </section>
      </main>
    </>
  )
}

export default OrdersPage