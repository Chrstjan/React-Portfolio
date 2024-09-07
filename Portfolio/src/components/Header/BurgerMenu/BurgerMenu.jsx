import style from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
  return (
    <>
      <div className={style.hamburger}>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </div>
    </>
  );
};
