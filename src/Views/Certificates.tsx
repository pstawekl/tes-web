import Gallery, { GalleryImage, certificateType } from "../Components/Gallery";

export default function Certificates() {
    const VIEWLAYOUTTAG = "tes-view-layout";
    const slideImages: GalleryImage[] = [
        {
            src: 'http://r-biuro.pl/assets/images/team-img4.png',
            name: 'Księgowy Bilansista KB 15/09/S',
            certType: certificateType.KURS,
            description: 'Celem kursu było przygotowanie do zawodu samodzielnego księgowego',
            width: 3,
            height: 4,
            index: 1
        },
        {
            src: 'http://r-biuro.pl/assets/images/team-img3.png',
            name: 'Główny Księgowy',
            certType: certificateType.KURS,
            description: 'Główny księgowy to osoba odpowiedzialna za prowadzenie rachunkowości w przedsiębiorstwie. Zazwyczaj główny księgowy jest zwierzchnikiem pozostałych księgowych w przedsiębiorstwie.',
            width: 3,
            height: 4,
            index: 2
        },
        {
            src: 'http://r-biuro.pl/assets/images/team-img2.png',
            name: 'Usługowe prowadzenie ksiąg rachunkowych',
            certType: certificateType.CERTYFIKAT,
            description: 'Certyfikat nadaje uprawnienia niezbędne do usługowego prowadzenia ksiąg rachunkowych',
            width: 3,
            height: 4,
            index: 3
        }
    ];

    return (
        <section className={VIEWLAYOUTTAG + " tes-certificates section is-fluid mt-1 mb-0 pb-0 px-0 mx-0"}>
            <div className="container is-fluid px-0">
                <div className={VIEWLAYOUTTAG + "-title"}>
                    <h1 className="title has-text-white is-size-1 py-5 px-6">Certyfikaty</h1>
                </div>
                <div className={VIEWLAYOUTTAG + "-subtitle hero is-small is-fluid"}>
                    <div className="hero-body">
                        <p className="title has-text-white">Posiadamy certyfikaty niezbędne to funkcjonowania profesjonalnego Biura Rachunkowego</p>
                    </div>
                </div>
                <div className={VIEWLAYOUTTAG + "-content hero is-info is-fluid"}>
                    <div className="hero-body">
                        <div className="content">
                            Nasze biuro posiada 3 certyfikaty, które uprawniają nas do usługowego prowadzenia ksiąg rachunkowych, prowadzenia rachunkowości oraz do wykonywania czynności biegłego rewidenta.
                            Są to:
                            <ul>
                                <li>Certyfikat - Usługowe prowadzenie ksiąg handlowych - Certyfikat nadaje uprawnienia niezbędne do usługowego prowadzenia ksiąg rachunkowych</li>
                                <li>Kurs - Główny Księgowy - Główny księgowy to osoba odpowiedzialna za prowadzenie rachunkowości w przedsiębiorstwie. Zazwyczaj główny księgowy jest zwierzchnikiem pozostałych księgowych w przedsiębiorstwie.</li>
                                <li>Kurs - Księgowy Bilansista KB 15/09/S - Celem kursu było przygotowanie do zawodu samodzielnego księgowego.</li>
                            </ul>
                        </div>
                        <div className="subtitle">Nasze certyfikaty:</div>
                        <Gallery galleryImages={slideImages} />
                    </div>
                </div>
            </div>
        </section>
    )
}