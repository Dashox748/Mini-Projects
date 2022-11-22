import {useState} from "react";
import "./header.css"

interface Props {
    fetchData: any;
}

function Header({fetchData}: Props) {


    const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [input, setInput] = useState<string>("")
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (input?.length !== 0 && openSearch) {
            fetchData(input, "")
            setInput("")
            return
        }
        setOpenSearch(!openSearch)

    }
    return (
        <div className="header__container">
            <div className="header__container-hamburger">
                <button className="button-toggle-hamburger" onClick={() => {
                    setHamburgerToggle(!hamburgerToggle)

                }

                }>

                    <svg viewBox="0 0 100 100" className="hamburger-menu-svg">
                        <rect className={hamburgerToggle ? "open top" : ""}
                              x="10" y="25"
                              width="80" height="10" rx="5"
                              fill="#FFFFFF" opacity="40%"
                        ></rect>
                        <rect className={hamburgerToggle ? "open middle" : ""}
                              x="10" y="45"
                              width="80" height="10" rx="5"
                              fill="#FFFFFF" opacity="40%"
                        ></rect>
                        <rect className={hamburgerToggle ? "open bottom" : ""}
                              x="10" y="65"
                              width="80" height="10" rx="5"
                              fill="#FFFFFF" opacity="40%"
                        ></rect>
                    </svg>
                </button>
                <ul className={`list-category ${hamburgerToggle ? "openHamburger" : "closeHamburger"}`}>
                    <li onClick={() => {
                        fetchData("", "general")
                        setHamburgerToggle(false)
                    }}>General
                    </li>
                    <li onClick={() => {
                        fetchData("", "business")
                        setHamburgerToggle(false)
                    }}>Business
                    </li>
                    <li onClick={() => {
                        fetchData("", "sports")
                        setHamburgerToggle(false)
                    }}>Sports
                    </li>
                    <li onClick={() => {
                        fetchData("", "technology")
                        setHamburgerToggle(false)
                    }}>Technology
                    </li>   
                </ul>
            </div>

            <div className="header__container-logo">
                <div className="logo">JS</div>
                <span onClick={() => window.location.reload()}>Just News</span>
            </div>

            <form className={`search-form ${openSearch ? "openSearch" : "closed"}`} onSubmit={handleSubmit}>
                <button style={{background: "transparent"}}>
                    <svg viewBox="0 0 100 100" width="26" height="26">
                        <circle cx="50" cy="50" r="30" fill="transparent" stroke="gray" strokeWidth="6">
                        </circle>
                        <line x1="70" y1="70" x2="100" y2="100" stroke="gray" strokeWidth="6"
                        >
                        </line>
                    </svg>
                </button>
                <input className={`search-input `} placeholder="Search"
                       onChange={(event) => setInput(event.target.value)} value={input}/>
            </form>

        </div>
    )
}


export default Header