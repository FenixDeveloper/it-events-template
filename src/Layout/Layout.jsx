import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>{<Outlet />}</main>
      <Footer />
    </div>
  );
};
