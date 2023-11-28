import { faEmpire, faFacebook, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer() {
    return (
        <footer className="footer tes-footer py-6 px-5">
            <div className="content columns">
                <div className="footer-left column">
                    <p>
                        Adres: ul. Żeromskiego 7/9, <br />
                        98-220 Zduńska Wola <br />
                        (Wejście od ul. Przejazd)
                    </p>
                    <p>Telefon: +48 501 668 545</p>
                    <p>E-mail: rachunkowe@r-biuro.pl</p>
                </div>
                <div className="footer-center column">
                    <a href="https://www.facebook.com/BiuroRachunkoweTes" target="_blank" rel="noreferrer">
                        <span className="icon">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                    </a>
                    <a href="mailto:rachunkowe@r-biuro.pl" rel="noreferrer">
                        <span className="icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                    </a>
                    <a href="tel:+48501668545" rel="noreferrer">
                        <span className="icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                    </a>
                </div>
                <div className="footer-right column">
                    <p>
                        Godziny otwarcia: <br />
                        Poniedziałek - Piątek: 8:00 - 16:00
                    </p>
                    <p><b>© 2023 TES</b> Wszelkie prawa zastrzeżone</p>
                </div>
            </div>
            <div className="content has-text-centered">
                <p>
                    <strong>TES</strong> by <a href="https://interactive.net.pl">Interactive</a>
                </p>
            </div>
        </footer>
    )
}