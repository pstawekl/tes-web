export default function Offer() {
    const VIEWLAYOUTTAG = "tes-view-layout";

    return (
        <section className={VIEWLAYOUTTAG + " tes-offer section is-fluid mt-1 mb-0 pb-0 px-0 mx-0"}>
            <div className="container is-fluid px-0">
                <div className={VIEWLAYOUTTAG + "-title"}>
                    <h1 className="title has-text-white is-size-1 py-5 px-6">Oferta</h1>
                </div>
                <div className={VIEWLAYOUTTAG + "-subtitle hero is-small is-fluid"}>
                    <div className="hero-body">
                        <p className="title has-text-info">Oferujemy pełen zakres usług księgowych</p>
                    </div>
                </div>
                <div className={VIEWLAYOUTTAG + "-content hero is-info is-fluid"}>
                    <div className="hero-body">
                        <p className="content about-list is-size-5">
                            Nasze biuro rachunkowe oferuje kompleksową obsługę księgową dla firm, obejmującą prowadzenie ksiąg, rozliczenia podatkowe oraz wsparcie w tworzeniu strategii finansowych. Zapewniając profesjonalizm, dokładność i terminowość, pomaga przedsiębiorstwom skupić się na rozwoju biznesu. 
                        </p>
                    </div>
                </div>
                <div className={VIEWLAYOUTTAG + "-content hero is-fluid"}>
                    <div className="hero-body">
                        <p className="content about-list is-size-5">
                            Nasza oferta obejmuje usługi księgowe dla:
                            <ul>
                                <li>osób fizycznych (podatkowa księga przychodów i rozchodów, ryczałt ewidencjonowany, i inne)</li>
                                <li>spółek z o.o.,</li>
                                <li>spółek akcyjnych,</li>
                                <li>fundacji,</li>
                                <li>stowarzyszeń,</li>
                                <li>spółek jawnych,</li>
                                <li>spółek komandytowych,</li>
                                <li>spółek cywilnych,</li>
                                <li>wspólnot mieszkaniowych,</li>
                                <li>innych podmiotów prowadzących pełną księgowość,</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className={VIEWLAYOUTTAG + "-content is-info hero is-fluid"}>
                    <div className="hero-body">
                        <p className="content about-list is-size-5">
                            Zajmujemy się również prowadzeniem:
                            <ul>
                                <li>Księgi Przychodów i Rozchodów</li>
                                <li>Księgi Rachunkowej</li>
                                <li>Obsługi Kadrowo Płacowej</li>
                                <li>Pełnej Obsługi Podatkowej</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}