import individualToClients from './../Images/individual-approach-to-client.webp';
import alwaysOnTime from './../Images/always-on-time.webp';
import perfectBalance from './../Images/perfect-balance.webp';
import justOneCallAway from './../Images/just-one-call-away.webp';
import Map from '../Components/Map';

export default function Home() {
    const TAGNAME = "tes-home";


    const descriptionItems: { title: string, description: string, image: string, side: string }[] = [
        {
            title: "Indywidualne podejście do klienta",
            description: "Zaufaj naszej firmie i wypróbuj usługi, a przekonasz się, że Twoje dokumenty są w dobrych rękach.",
            image: individualToClients,
            side: "left"
        },
        {
            title: "Zawsze na Czas",
            description: "Oferujemy profesjonalną i rzetelną obsługę, zawsze w terminie.",
            image: alwaysOnTime,
            side: "right"
        },
        {
            title: "Wystarczy Jeden Telefon",
            description: "Wystarczy jeden telefon +48 501 668 545 i już dziś możesz przestać martwić się o własne dokumenty.",
            image: justOneCallAway,
            side: "left"
        },
        {
            title: "Odpowiedni Balans",
            description: "Nasza firma to odpowiednio wyważony balans między rzetelną pracą, jej szybkością oraz ceną.",
            image: perfectBalance,
            side: "right"
        },
    ]

    return (
        <div className={TAGNAME}>
            <div className={TAGNAME + "__banner"}>
                <h1 className="title is-size-1 has-text-info">TES</h1>
                <p className="subtitle">TWOJE BIURO RACHUNKOWE</p>
                <span className="content">
                    Profesjonalna obsługa i dbałość o Twoje finanse idą w parze!

                    Zaufaj nam, byś mógł skupić się na tym, co naprawdę ważne - rozwijaniu swojego biznesu.
                </span>
                <button className="button is-info is-medium is-rounded"
                    onClick={e => {
                        e.preventDefault();
                        document.getElementsByClassName(`${TAGNAME}__description-item`)[0]?.scrollIntoView({ behavior: "smooth" })
                    }}>
                    Dowiedz się więcej
                </button>
            </div>
            <div className={TAGNAME + "__description container is-fluid py-6"}>
                {
                    descriptionItems.map((item, index) => {
                        if (item.side === "left") {
                            return (
                                <div className={TAGNAME + "__description-item-container left"}>
                                    <div className={TAGNAME + "__description-item"} key={index}>
                                        <div className={TAGNAME + "__description-item-left pr-5"}>
                                            <h1 className="title is-size-3 has-text-info">{item.title}</h1>
                                            <p className="content">{item.description}</p>
                                        </div>
                                        <div className={TAGNAME + "__description-item-right pl-5"}>
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                    </div>
                                    <div className={TAGNAME + "__description-item-bottom-bar"}></div>
                                </div>
                            )
                        } else {
                            return (
                                <div className={TAGNAME + "__description-item-container right"}>
                                    <div className={TAGNAME + "__description-item"} key={index}>
                                        <div className={TAGNAME + "__description-item-left pr-5"}>
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className={TAGNAME + "__description-item-right pl-5"}>
                                            <h1 className="title is-size-3 has-text-info">{item.title}</h1>
                                            <p className="content">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className={TAGNAME + "__description-item-bottom-bar"}></div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className={TAGNAME + "__dialouge hero is-info"}>
                <div className="hero-body has-text-centered">
                    <p className="title">
                        Nasze biuro rachunkowe jest podmiotem wyspecjalizowanym
                    </p>
                    <p className="subtitle is-size-4">
                        Prowadzimy podatkowe księgi przychodów i rozchodów (KPiR), ryczałt ewidencjonowany oraz pełne księgi rachunkowe. 
                        Obsługujemy firmy z całej Polski. Na życzenie Klienta odbieramy dokumenty z jego siedziby na terenie Zduńskiej Woli i okolic. <br />
                        Dzięki nowym technologiom pracujemy również zdalnie.
                    </p>
                </div>
            </div>
            <div className={TAGNAME + "__map"}>
                <Map />
            </div>
        </div>
    );
}