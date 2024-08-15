import style from "./Navbar.module.scss"

export const Navbar = () => {
    return (
        <>
            <nav className={style.navbarStyling}>
                <ul className={style.navList}>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </ul>
                <div className={style.hamburger}>
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                </div>
            </nav>
        </>
    )
}