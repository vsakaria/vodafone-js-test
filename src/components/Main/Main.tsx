import React, { ReactElement } from "react";
import styles from "./styles/Main.module.css";
import OrderProcess from "../OrderProcess/OrderProcess";

const Main = (props: any): ReactElement => {
  return (
    <section className={styles.main}>
      <h1 className="primary-color">Vodafone Test</h1>
      <OrderProcess orders={[{ state: "success" }]} />
    </section>
  );
};

export default Main;