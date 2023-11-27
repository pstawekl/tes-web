import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Map from "../Components/Map";
const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const Contact = () => {
    const VIEWLAYOUTTAG = "tes-view-layout";
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [recaptcha, setRecaptcha] = useState('')
    const [isVerified, setIsVerified] = useState<boolean>(false)
    const [fake_field, setFakeField] = useState('')
    const [isSubmited, setIsSubmited] = useState<boolean>(false)

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        console.log(name, email, message)

        if (name === '') {
            console.error("name is empty!")
            alert("Uzupełnij imię!");
            document.getElementsByClassName("form-name")[0].classList.add("is-danger");
        }

        if (email === '') {
            console.error("email is empty!")
            alert("Uzupełnij email!");
            document.getElementsByClassName("form-email")[0].classList.add("is-danger");
        }

        if (message === '') {
            console.error("message is empty!")
            document.getElementsByClassName("form-message")[0].classList.add("is-danger");
            alert("Uzupełnij wiadomość!");
        }

        if (recaptcha === '') {
            console.error("recaptcha is empty!")
            alert("Uzupełnij recaptcha!");
        }

        if (fake_field !== '') {
            console.error("it's a bot!")
        }
        if (isVerified) {
            setIsSubmited(true);
        }
    }

    function onChange(value: any) {
        setRecaptcha(value);
        if (value) {
            setIsVerified(true);
        } else {
            setIsVerified(false);
        }
    }

    useEffect(() => {
        if (isSubmited) {
            fetch("http://localhost:8000/message").then((res) => res.json()).then((data) => console.log(data));
        }
    }, [isSubmited])

    return (
        <section className={VIEWLAYOUTTAG + " tes-contact section is-fluid mt-1 mb-0 pb-0 px-0 mx-0"}>
            <div className="container is-fluid px-0">
                <div className={VIEWLAYOUTTAG + "-title"}>
                    <h1 className="title has-text-white is-size-1 py-5 px-6">Kontakt</h1>
                </div>
                <div className={VIEWLAYOUTTAG + "-subtitle hero is-small is-fluid"}>
                    <div className="hero-body">
                        <p className="title has-text-white">Skontaktuj się z nami!</p>
                    </div>
                </div>
                <div className={VIEWLAYOUTTAG + "-content hero is-info is-fluid"}>
                    <div className="hero-body">
                        <div className="subtitle">
                            Informacje kontaktowe
                        </div>
                        <div className="content">
                            <ul>
                                <li>Adres: ul. Żeromskiego 7/9, 98-220 Zduńska Wola (Wejście od ul. Przejazd)</li>
                                <li>Telefon: +48 501 668 545</li>
                                <li>E-mail: rachunkowe@r-biuro.pl</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={VIEWLAYOUTTAG + "-content hero is-fluid"}>
                    <div className="hero-body">
                        <form className="py-5">
                            <div className="subtitle">Napisz do nas</div>
                            <div>
                                <input className="input form-name" type="text" id="name" name="name"
                                    value={name} onChange={e => { setName(e.target.value); e.target.value !== '' && e.target.classList.remove('is-danger') }} placeholder="Twoje Imię..." />
                            </div>

                            <div className="py-2">
                                <input className="input form-email" type="email" id="email" name="email"
                                    value={email} onChange={e => { setEmail(e.target.value); e.target.value !== '' && e.target.classList.remove('is-danger') }} placeholder="Twój adres e-mail..." />
                            </div>

                            <div className="py-5">
                                <textarea className="textarea form-message" id="message" name="message"
                                    value={message} onChange={e => { setMessage(e.target.value); e.target.value !== '' && e.target.classList.remove('is-danger') }} placeholder="Twoja wiadomość" />
                            </div>

                            <button className="button is-info" type="submit" onClick={(e) => handleSubmit(e)}>Wyślij</button>
                            <ReCAPTCHA
                                sitekey="6Lflhh0pAAAAAOyk0Umi9U1dRhFY4Ml_C1bvla_z"
                                onChange={onChange}
                                className="my-2"
                            />
                            <input type="hidden" name="fake_field" value={fake_field} onChange={e => setFakeField(e.target.value)} />
                        </form>
                        {/* TODO - https://www.abstractapi.com/guides/react-send-email-from-your-app-without-a-backend */}
                    </div>
                </div>
                <div className={VIEWLAYOUTTAG + "-content is-info hero is-fluid"}>
                    <div className="hero-body">
                        <div className={"__map"}>
                            <div className="subtitle">Tutaj się znajdujemy</div>
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;
