function OrderItem({ numero, status, statusClass }) {
  return (
    <div className="order-item">
      <div className="product-image">
        <img src="/assets/sapatotop.png" alt="" />
      </div>

      <div className="order-info">
        <small>Pedido nº {numero}</small>
        <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
      </div>

      <span className={`status ${statusClass}`}>{status}</span>
    </div>
  )
}

export default OrderItem