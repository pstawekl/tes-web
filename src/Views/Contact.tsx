import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Map from "../Components/Map";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const VIEWLAYOUTTAG = "tes-view-layout";
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [recaptcha, setRecaptcha] = useState('')
    const [isVerified, setIsVerified] = useState<boolean>(false)
    const [fake_field, setFakeField] = useState('')
    const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false)
    const [alertMessage, setAlertMessage] = useState<{ title: string, message: string }>({ title: '', message: '' });
    const [messageType, setMessageType] = useState<string>("is-hidden")
    const [isSubmited, setIsSubmited] = useState<boolean>(false);
    const form = useRef<HTMLFormElement>(null);

    function toggleAlert() {
        if (isAlertVisible) {
            document.getElementsByClassName("message")[0].classList.remove("is-hidden");
            document.getElementsByClassName("message")[0].classList.add(messageType);
            setIsAlertVisible(false);
        } else {
            document.getElementsByClassName("message")[0].classList.add("is-hidden");
            document.getElementsByClassName("message")[0].classList.remove(messageType);
        }
    }

    function showAlert(title: string, message: string, messageType: string, isAlertVisible: boolean) {
        setAlertMessage({ title: title, message: message });
        setMessageType(messageType);
        setIsAlertVisible(isAlertVisible);
        toggleAlert();
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const submitButton = document.getElementsByClassName('tes-submit-button')[0];
        submitButton.setAttribute('disabled', 'true');
        showAlert("Wysyłanie...", "Proszę czekać...", "is-warning", true);
        

        if (name === '') {
            showAlert("Błąd!", "Uzupełnij imię!", "is-danger", true)
            document.getElementsByClassName("form-name")[0].classList.add("is-danger");
            return
        }

        if (email === '') {
            showAlert("Błąd!", "Uzupełnij email!", "is-danger", true)
            setAlertMessage({ title: "Błąd!", message: "Uzupełnij email!" })
            document.getElementsByClassName("form-email")[0].classList.add("is-danger");
            return;
        }

        if (message === '') {
            showAlert("Błąd!", "Uzupełnij wiadomość!", "is-danger", true)
            document.getElementsByClassName("form-message")[0].classList.add("is-danger");
            return;
        }

        if (recaptcha === '') {
            showAlert("Błąd!", "Potwierdź, że nie jesteś robotem!", "is-danger", true)
            return;
        }

        if (fake_field !== '') {
            showAlert("Błąd!", "Nasz system wykrył, że jesteś robotem. Odśwież stronę i spróbuj jeszcze raz.", "is-danger", true)
            return;
        }
        if (isVerified) {
            sendEmail(e);
        }
    }

    function onCaptchaChange(value: any) {
        setRecaptcha(value);
        if (value) {
            setIsVerified(true);
        } else {
            setIsVerified(false);
        }
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('tes.home.pl', 'template_gneuu7v', form.current as HTMLFormElement, 'NxNGNwjO1_jzc7ij8')
            .then((result) => {
                showAlert("Sukces!", "Wiadomość została wysłana!", "is-success", true);
                setIsSubmited(true);
                clearForm();
            }, (error) => {
                showAlert("Błąd!", "Wystąpił błąd podczas wysyłania wiadomości!", "is-danger", true);
            });
    };

    function clearForm() {
        setName('');
        setEmail('');
        setMessage('');
        setRecaptcha('');
        setIsVerified(false);
    }

    return (
        <section className={VIEWLAYOUTTAG + " tes-contact section is-fluid mt-1 mb-0 pb-0 px-0 mx-0"}>
            <div className="container is-fluid px-0">
                <div className={VIEWLAYOUTTAG + "-title"}>
                    <h1 className="title has-text-white is-size-1 py-5 px-6">Kontakt</h1>
                </div>
                <div className={VIEWLAYOUTTAG + "-subtitle hero is-small is-fluid"}>
                    <div className="hero-body">
                        <p className="title has-text-info">Skontaktuj się z nami!</p>
                    </div>
                </div>
                <div className={VIEWLAYOUTTAG + "-content hero is-info is-fluid"}>
                    <div className="hero-body">
                        <div className="subtitle">
                            Informacje kontaktowe
                        </div>
                        <div className="content is-selectable">
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
                        <article className={"message tes-message " + messageType}>
                            <div className="message-header">
                                <p>{alertMessage.title}</p>
                                <button className="delete" aria-label="delete" onClick={e => {e.preventDefault(); setIsAlertVisible(false); toggleAlert()}}></button>
                            </div>
                            <div className="message-body">
                                {alertMessage.message}
                            </div>
                        </article>
                        {
                            !isSubmited && <form className="py-5" ref={form as React.LegacyRef<HTMLFormElement>} onSubmit={e => {handleSubmit(e);}}>
                            <div className="subtitle">Napisz do nas</div>
                            <div>
                                <input className="input form-name" type="text" id="name" name="name"
                                    value={name} onChange={e => {
                                        setName(e.target.value); e.target.value !== '' && e.target.classList.remove('is-danger')
                                    }}
                                    placeholder="Twoje Imię..." />
                            </div>

                            <div className="py-2">
                                <input className="input form-email" type="email" id="email" name="email"
                                    value={email} onChange={e => { setEmail(e.target.value); e.target.value !== '' && e.target.classList.remove('is-danger') }} placeholder="Twój adres e-mail..." />
                            </div>

                            <div className="py-5">
                                <textarea className="textarea form-message" id="message" name="message"
                                    value={message} onChange={e => { setMessage(e.target.value); e.target.value !== '' && e.target.classList.remove('is-danger') }} placeholder="Twoja wiadomość" />
                            </div>

                            <input className="button is-info tes-submit-button" type="submit" value="Wyślij"/>
                            <ReCAPTCHA
                                sitekey="6Lflhh0pAAAAAOyk0Umi9U1dRhFY4Ml_C1bvla_z"
                                onChange={onCaptchaChange}
                                className="my-2"
                            />
                            <input type="hidden" name="fake_field" value={fake_field} onChange={e => setFakeField(e.target.value)} />
                        </form>
                        }
                        {
                            isSubmited && <div className="subtitle">Dziękujemy za wysłanie wiadomości!</div>
                        }
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
