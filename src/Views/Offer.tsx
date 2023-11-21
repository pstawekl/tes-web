export default function Offer() {
    const TAGNAME = "tes-offer";

    return (
        <section className={TAGNAME + " section is-fluid mt-1 mb-0 pb-0 px-0 mx-0"}>
            <div className="container is-fluid px-0">
                <div className={TAGNAME + "-title"}>
                    <h1 className="title has-text-white is-size-1 py-5 px-6">Oferta</h1>
                </div>
                <div className={"hero is-small is-fluid "+ TAGNAME+ "-subtitle"}>
                    <div className="hero-body">
                        <p className="title has-text-white">Oferujemy pełen zakres usług księgowych dla:</p>
                    </div>
                </div>
                <div className={"hero is-info is-fluid " + TAGNAME + "-content"}>
                    <div className="hero-body">
                        <p className="content about-list is-size-4">
                            <ul className="my-0">
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
                            <h3 className="has-text-white">oraz</h3>
                            <ul>
                                <li>Księgi Przychodów i Rozchodów</li>
                                <li>Księgi Rachunkowe</li>
                                <li>Obsługa Kadrowo Płacowa</li>
                                <li>Pełna Obsługa Podatkowa</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}