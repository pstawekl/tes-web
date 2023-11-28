import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { faEmpire, faFacebook, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faBars, faClose, faEnvelope, faHamburger, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function MenuNavbar() {
    const [isContextOpen, setIsContextOpen] = useState(false)
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

    useEffect(() =>{
        if(isContextOpen){
            document.getElementsByClassName('context-menu')[0].classList.add('is-active')
        }else{
            document.getElementsByClassName('context-menu')[0].classList.remove('is-active')
        }
    }, [isContextOpen])

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item has-text-info is-size-4 has-text-weight-bold" href="/">
                    TES
                </a>

                <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={e => setIsContextOpen(!isContextOpen)}>
                    {
                        isContextOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />
                    }
                </div>
                <div className="context-menu">
                    {
                        menuItems.map((item, index) => {
                            return (
                                <a className="navbar-item has-text-white" href={item.path} key={index}>{item.name}</a>
                            )
                        })
                    }
                </div>
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