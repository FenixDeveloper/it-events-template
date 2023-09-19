import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import {App} from "../index";

export const Layout = () => {
  return (
      <App>
        <div className={styles.app}>
          <Header />
          <main className={styles.main}>{<Outlet />}</main>
          <Footer />
        </div>
      </App>
  );
};
