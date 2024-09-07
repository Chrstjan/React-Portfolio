import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Header/Navbar/Navbar";
import { Main } from "../components/Main/Main";
import { BurgerMenu } from "../components/Header/BurgerMenu/BurgerMenu";

export const MainLayout = () => {
  return (
    <>
      <Header>
        <Navbar />
        <BurgerMenu />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
