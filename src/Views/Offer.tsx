export default function Offer() {
    const TAGNAME = "tes-offer";

    return (
        <div className={TAGNAME + "hero"}>
            <div className="hero-body">
                <p className="title has-text-info py-5"> OFERUJEMY PEŁEN ZAKRES USŁUG KSIĘGOWYCH DLA: </p>
                <p className="content about-list">
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
                    <h3>oraz</h3>
                    <ul>
                        <li>Księgi Przychodów i Rozchodów</li>
                        <li>Księgi Rachunkowe</li>
                        <li>Obsługa Kadrowo Płacowa</li>
                        <li>Pełna Obsługa Podatkowa</li>
                    </ul>
                </p>
            </div>
        </div>
    )
}