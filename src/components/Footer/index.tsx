import Realizacao from "./Realizacao";
import styles from '../../styles/Footer.module.scss'
import Link from "next/link";
import { LogoLais, LogoFacebook, LogoTwitter, LogoInstagram } from "../Icones";
import { stableValueHash } from "react-query/types/core/utils";

export default function Footer() {
    return (
        <footer >
            <Realizacao />
            <section className={styles.footer}>
                <div className={styles.container}>
                    <h1>{LogoLais}</h1>
                    <p>Laboratório de Inovação Tecnológica em Saúde.</p>
                </div>
                <div className={styles.container}>
                    <h1>Links Úteis</h1>
                    <ul className={styles.link_itens}>
                        <li><Link href="/" ><a className={styles.link_a}>Início</a></Link></li>
                        <li><Link href="/" ><a className={styles.link_a}>Sobre Nós</a></Link></li>
                        <li><Link href="/cursos" ><a className={styles.link_a}>Módulos</a></Link></li>
                        <li><Link href="/parceiros" ><a className={styles.link_a}>Parceiros</a></Link></li>
                        <li><Link href="/transparencia" ><a className={styles.link_a}>Transparência</a></Link></li>
                    </ul>
                </div>
                <div className={styles.container}>
                    <h1>Redes socias</h1>
                    <ul className={styles.link_sociais}>
                        <li>
                            <a title="Facebook" rel= "noreferrer" target="_blank"
                            href="https://www.facebook.com/LAIS.HUOL">{LogoFacebook}</a>
                        </li>
                        <li>
                            <a title="Twitter" rel= "noreferrer" target="_blank"
                            href="https://twitter.com/laishuol">{LogoTwitter}</a>
                        </li>
                        <li>
                            <a title="Instagram" rel= "noreferrer" target="_blank"
                            href="https://www.instagram.com/laishuol">{LogoInstagram}</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.break}>
                    <p className={styles.text_bottom}>
                        2022 © LAIS (HUOL). Todos os direitos reservados
                    </p>      
                </div>
            </section>
        </footer>
    );
}