import { LogoRealizacao} from '../../Icones';
import styles from '../../../styles/Footer.module.scss'
export default function Realizacao() {
    return (
        <section className={styles.footer_realizacao}>
            <h1>Realização</h1>
            <div>
                {LogoRealizacao}
            </div>
        </section>
    );
}