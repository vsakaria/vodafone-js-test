import React, { ReactElement } from "react";
import styles from "./styles/ClientSummary.module.css";

const Main = (props: any): ReactElement => {
  return (
    <section className={styles.clientSummaryDetails}>
      <h1 className="primary-color">Vodafone Test</h1>
    </section>
  );
};

export default Main;