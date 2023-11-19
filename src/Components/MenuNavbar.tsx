export default function MenuNavbar() {
    const menuItems = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "O nas",
            path: "/about"
        },
        {
            name: "Oferta",
            path: "/offer"
        },
        {
            name: "Certyfikaty",
            path: "/certificates"
        },
        {
            name: "Kontakt",
            path: "/contact"
        }
    ]

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item has-text-info is-size-4 has-text-weight-bold" href="/">
                    TES
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">

                </div>

                <div className="navbar-end">
                    {
                        menuItems.map((item, index) => {
                            return (
                                <a className="navbar-item has-text-white" href={item.path} key={index}>
                                    {item.name}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    )
}

{/* <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div> */}