import Link from "next/link";
import MaisPopulares from "./MaisPopulares";
import styles from '../../styles/ModulosEducacionais.module.scss'
import MaisBemAvaliados from "./MaisBemAvaliados";
import MaisRecentes from "./MaisRecentes";
import { ButtonVerMais } from "../Button";
import axios from "axios";
import { useQuery } from "react-query";

export default function ModulosEducacionais() {

    return (
        <section className={styles.section}>
            <div>
                <h1>Módulos Educacionais</h1>
            </div>

            <nav className={styles.navbar}>
                <ul className={styles.link_itens}>
                    <li>
                        <Link href="../ModulosEducacionais/MaisPopulares.tsx" >
                            <a className={styles.link_a}><MaisPopulares /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="../ModulosEducacionais/MaisBemAvaliados.tsx">
                            <a className={styles.link_a}><MaisBemAvaliados /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="../ModulosEducacionais/MaisRecentes.tsx">
                            <a className={styles.link_a}><MaisRecentes /></a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div>

            </div>
            <div className={styles.button}>
                <ButtonVerMais />
            </div>

        </section>
    )
}