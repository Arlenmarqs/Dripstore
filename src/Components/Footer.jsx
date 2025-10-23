import "../App.css"
import Logofooter from "../assets/Logofooter.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div id="footer-logo">
                        <img src={Logofooter} alt="Logo Digital Store" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="social-icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Informação</h4>
                    <ul>
                        <li>Sobre Drip Store</li>
                        <li>Segurança</li>
                        <li>Wishlist</li>
                        <li>Blog</li>
                        <li>Trabalhe conosco</li>
                        <li>Meus Pedidos</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Categorias</h4>
                    <ul>
                        <li>Camisetas</li>
                        <li>Calças</li>
                        <li>Bonés</li>
                        <li>Headphones</li>
                        <li>Tênis</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contato</h4>
                    <p>
                        Av. Santos Dumont, 1510 – 1 andar – Aldeota, Fortaleza – CE,
                        60150-161
                    </p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>

            <hr />
            <p className="footer-bottom">© 2025 Digital College</p>
        </footer>
    )
}

export default Footer
