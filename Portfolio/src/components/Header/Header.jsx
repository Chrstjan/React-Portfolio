import { Navbar } from "./Navbar/Navbar"

import style from "./Header.module.scss"

export const Header = () => {
    return (
        <>
            <header className={style.headerStyling}>
                <Navbar />
                <h2>Christian Sorensen</h2>
            </header>
        </>
    )
}