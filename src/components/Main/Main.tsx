import React, { ReactElement } from "react";
import styles from "./styles/Main.module.css";
import OrderProcess from "../OrderProcess/OrderProcess";

const Main = (): ReactElement => {
  return (
    <section className={styles.main}>
      <h1 className="primary-color">Vodafone Test</h1>
      <OrderProcess
        orders={[
          { state: "processing" },
          { state: "error", errorCode: "INCORRECT_DETAILS" }
        ]}
      />
    </section>
  );
};

export default Main;
