import Gallery, { GalleryImage, certificateType } from "../Components/Gallery";
import firstCert from './../Images/certificates/1.jpg';
import secondCert from './../Images/certificates/2.jpg';
import thirdCert from './../Images/certificates/3.jpg';
import fourthCert from './../Images/certificates/4.jpg';
import fifthCert from './../Images/certificates/5.jpg';
import sixthCert from './../Images/certificates/6.jpg';
import seventhCert from './../Images/certificates/7.png';
import eighthCert from './../Images/certificates/8.jpg';

export default function Certificates() {
    const VIEWLAYOUTTAG = "tes-view-layout";
    const slideImages: GalleryImage[] = [
        {
            src: firstCert,
            name: 'Certyfikat Księgowy - Elżbieta Stawska',
            certType: certificateType.CERTYFIKAT,
            description: 'Certyfikat potwierdzający kwalifikację oraz uprawniający do usługowe prowadzenia ksiąg rachunkowych',
            width: 3,
            height: 4,
            index: 1
        },
        {
            src: secondCert,
            name: 'Kurs dla kandydatów na głównego księgowego - Elżbieta Stawska',
            certType: certificateType.KURS,
            description: 'Kurs dla kandydatów na głównego księgowego przygotowuje uczestników do profesjonalnej pracy w obszarze rachunkowości i finansów. Zapewnia kompleksową wiedzę od podstawowych zasad księgowości po zaawansowane umiejętności zarządzania finansami, audytu oraz etyki zawodowej',
            width: 3,
            height: 4,
            index: 2
        },
        {
            src: thirdCert,
            name: 'Kurs dla kandydatów księgowego bilansistę - Elżbieta Stawska',
            certType: certificateType.KURS,
            description: 'Celem kursu było przygotowanie do zawodu samodzielnego księgowego',
            width: 3,
            height: 4,
            index: 3
        },
        {
            src: fourthCert,
            name: 'Kurs - RODO - Elżbieta Stawska',
            certType: certificateType.KURS,
            description: 'Kurs tłumaczący zagadanienia podstawowe oraz nowe obowiązki administratorów danych osobowych w związku z wejściem w życie RODO (RODO - Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE)',
            width: 3,
            height: 4,
            index: 4
        },
        {
            src: fifthCert,
            name: 'Kurs - Prowadzenie i rozliczanie fundacji i stowarzyszeń - Elżbieta Stawska',
            certType: certificateType.KURS,
            description: 'Celem kursu było przygotowanie do prowadzenia ksiąg rachunkowych fundacji i stowarzyszeń oraz rozliczania ich z urzędem skarbowym i ZUS. Kurs obejmował zagadnienia związane z prowadzeniem ksiąg rachunkowych fundacji i stowarzyszeń, rozliczaniem ich z urzędem skarbowym i ZUS, a także zagadnienia związane z podatkami, jakie dotyczą tych podmiotów',
            width: 3,
            height: 4,
            index: 5
        },
        {
            src: sixthCert,
            name: 'Kurs - Ulga badawczo rozwojowa oraz IP Box - Elżbieta Stawska',
            certType: certificateType.KURS,
            description: '',
            width: 3,
            height: 4,
            index: 6
        },
        {
            src: seventhCert,
            name: 'Certyfikat - Szkolenie PPK - Elżbieta Stawska',
            certType: certificateType.CERTYFIKAT,
            description: 'W trakcie szkolenia uczestnik uzyskal wiedzę na temat podstawowych regulacji zawartych w ustawie z 4 października 2018 r. o pracowniczych planach kapitałowych',
            width: 3,
            height: 4,
            index: 7
        },
        {
            src: eighthCert,
            name: 'Seminarium - Akcja edukacyjna BILANS 2011 - Elżbieta Stawska',
            certType: certificateType.KURS,
            description: 'Celem seminarium było doskonalenie kwalifikacji zawodowych',
            width: 3,
            height: 4,
            index: 8
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
                        <p className="title has-text-info">Posiadamy certyfikaty niezbędne do funkcjonowania profesjonalnego Biura Rachunkowego</p>
                    </div>
                </div>
                <div className={VIEWLAYOUTTAG + "-content hero is-info is-fluid"}>
                    <div className="hero-body">
                        <div className="content is-size-5">
                            Nasze biuro posiada wiele ukończonych certyfikatow, kursów oraz seminariów, które uprawniają nas do usługowego prowadzenia ksiąg rachunkowych.
                            Umożliwiają one również profesjonalną pracę w ogólnym obszarze rachunkowości i finansów, zgodnie z obowiązującymi przepisami. Zdobyta wiedza umożliwia nam prowadzenie ksiąg rachunkowych fundacji i stowarzyszeń.
                            Posiadamy również podstawową wiedzę na temat regulacji zawartych w ustawie o PPK (pracowniczych planach kapitałowych).
                        </div>
                    </div>
                </div>
                <div className={VIEWLAYOUTTAG + "-content hero is-fluid"}>
                    <div className="hero-body">
                        <div className="subtitle">Nasze certyfikaty:</div>
                        <Gallery galleryImages={slideImages} />
                    </div>
                </div>
            </div>
        </section>
    )
}