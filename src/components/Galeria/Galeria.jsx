import React from "react";
import Tags from "../Tags/Tags";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";

import Cards from "./Cards/Cards";

export default function Galeria() {
  console.log("fotos teste", fotos);
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela Galeria</h2>
      <Tags />
      <Cards itens={fotos} styles={styles} />
    </section>
  );
}
