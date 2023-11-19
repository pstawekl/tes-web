import over20years from "../Images/over-20-years.webp";
import experts from "../Images/experts.webp";
import modernSolutions from "../Images/modern-solutions.webp";
import ourServices from "../Images/our-services.webp";
import commitment from "../Images/commitment.webp";

export default function About() {
    const TAGNAME = "tes-about"

    const aboutItems: { title: string, subtitle: string, image: string, side: string }[] = [
        {
            title: "Ponad 20 Lat Doświadczenia w Branży Księgowej",
            subtitle: "Witamy w naszym biurze rachunkowym, sercu finansowej precyzji w Zduńskiej Woli. Od ponad dwóch dekad jesteśmy zaufanym partnerem dla lokalnych przedsiębiorstw i indywidualnych klientów, dostarczając usługi pełnej księgowości na najwyższym poziomie.",
            image: over20years,
            side: "left"
        },
        {
            title: "Zespół Ekspertów",
            subtitle: "Nasze biuro z dumą wspiera pięciu wykwalifikowanych księgowych, każdy z bogatym doświadczeniem i specjalistyczną wiedzą. Nasz zespół to nie tylko eksperci w swojej dziedzinie, ale także ludzie z pasją, którzy nieustannie podnoszą swoje kwalifikacje, aby świadczyć usługi na najwyższym poziomie.",
            image: experts,
            side: "right"
        },
        {
            title: "Nowoczesne Rozwiązania dla Twojej Firmy",
            subtitle: "Rozumiemy, jak dynamicznie zmienia się świat biznesu, dlatego nasze biuro łączy tradycję z nowoczesnością. Stosujemy najnowsze technologie księgowe i systemy informatyczne, aby zapewnić naszym klientom efektywność, bezpieczeństwo danych i łatwy dostęp do informacji finansowych",
            image: modernSolutions,
            side: "left"
        },
        {
            title: "Nasze Usługi",
            subtitle: "Oferujemy kompleksową obsługę księgową, w tym prowadzenie ksiąg rachunkowych, doradztwo podatkowe, rozliczenia z ZUS, obsługę kadrowo-płacową oraz pomoc w zakresie audytu i kontrolingu finansowego.",
            image: ourServices,
            side: "right"
        },
        {
            title: "Zaangażowanie i Indywidualne Podejście",
            subtitle: "Każdy klient jest dla nas ważny. Z zaangażowaniem podchodzimy do indywidualnych potrzeb i oczekiwań, co pozwala nam budować długotrwałe i owocne relacje. Naszym celem jest nie tylko świadczenie usług księgowych, ale także wspieranie rozwoju Twojego biznesu.",
            image: commitment,
            side: "left"
        }
    ];

    return (
        <section className={TAGNAME + " section"}>
            <div className={TAGNAME + "__header py-5"}>
                <h1 className="title has-text-info px-5">O NAS</h1>
            </div>

            {
                aboutItems.map((item, index) => {
                    if (item.side === "left") {
                        return (
                            <div className="tile is-ancestor">
                                <div className="tile is-vertical is-8">
                                    <div className="tile is-parent">
                                        <article className="tile is-child notification is-info">
                                            <p className="title">{item.title}</p>
                                            <p className="subtitle">{item.subtitle}</p>
                                            <div className="content">
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child notification is-info">
                                        <div className="content">
                                            <figure className="image ">
                                                <img src={item.image} alt={item.title} />
                                            </figure>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="tile is-ancestor">
                                <div className="tile is-parent">
                                    <article className="tile is-child notification is-info">
                                        <div className="content">
                                            <figure className="image">
                                                <img src={item.image} alt={item.title} />
                                            </figure>
                                        </div>
                                    </article>
                                </div>
                                <div className="tile is-vertical is-8">
                                    <div className="tile is-parent">
                                        <article className="tile is-child notification is-info">
                                            <p className="title">{item.title}</p>
                                            <p className="subtitle">{item.subtitle}</p>
                                            <div className="content">
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </section>
    )
}