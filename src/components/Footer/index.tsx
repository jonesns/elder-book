import Realizacao from "./Realizacao";
import styles from '../../styles/Footer.module.scss'

export default function Footer(){
    return(
        <footer >
            <Realizacao />
            <section className={styles.footer}>
                <div>
                    <h1>Lais</h1>
                    <p>Laboratório de Inovação Tecnológica em Saúde.</p>
                </div>
                <div>
                    <h1>Links Úteis</h1>
                    <ul>
                        <li><a href="../../pages/index.tsx">Início</a></li>
                        <li><a href="../../pages/index.tsx">Sobre Nós</a></li>
                        <li><a href="../../pages/cursos.tsx">Módulos</a></li>
                        <li><a href="../../pages/parceiros.tsx">Parceiros</a></li>
                        <li><a href="../../pages/transparencia.tsx">Transparência</a></li>
                    </ul>
                </div>
                <div>
                    <h1>Redes socias</h1>
                    <ul>
                        <li>Face</li>
                        <li>TT</li>
                        <li>Insta</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}