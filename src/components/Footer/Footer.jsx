import React from "react";
import footerStyles from "./footer.module.css";
import FooterList from "../FooterList/FooterList";
import facebookIcon from "../../assets/icons/icon-facebook.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";
import youtubeIcon from "../../assets/icons/icon-youtube.svg";

const polDetails = [
  "Políticas de privacidad",
  "Políticas de cambio",
  "Políticas de envío",
  "Términos y condiciones",
  "Responsabilidad social",
];
const aboutDetails = [
  "Encuentra tu tienda",
  "Contáctanos",
  "Trabaja con nosotros",
];
const paymentDetails = ["Paypal", "Contra entrega", "Tarjeta"];
function Footer() {
  return (
    <footer>
      <div className={footerStyles.footerInfo}>
        <div className={footerStyles.listMobile}>
          <FooterList summary="POLÍTICAS" details={polDetails} />
          <FooterList summary="SOBRE NOSOTROS" details={aboutDetails} />
          <FooterList summary="MÉTODOS DE PAGO" details={paymentDetails} />
        </div>
        <div className={footerStyles.listDesktop}>
          <div>
            <h3>POLÍTICAS</h3>
            <ul>
              <li>Políticas de privacidad</li>
              <li>Políticas de cambio</li>
              <li>Políticas de envío</li>
              <li>Términos y condiciones</li>
              <li>Responsabildiad social</li>
            </ul>
          </div>

          <div>
            <h3>SOBRE NOSOTROS</h3>
            <ul>
              <li>Encuentra tu tienda</li>
              <li>Contáctanos</li>
              <li>Trabaja con nosotros</li>
            </ul>
          </div>
        </div>
        <div className={footerStyles.socialContainer}>
          <h4>SÍGUENOS EN:</h4>
          <div className={footerStyles.iconsContainer}>
            <div>
              <img src={facebookIcon} alt="Facebook icon" />
            </div>
            <div>
              <img src={twitterIcon} alt="Twitter icon" />
            </div>
            <div>
              <img src={instagramIcon} alt="Instagram icon" />
            </div>
            <div>
              <img src={youtubeIcon} alt="Youtube icon" />
            </div>
          </div>
        </div>
      </div>

      <p className={footerStyles.copy}>
        © Copyright Colombia. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
