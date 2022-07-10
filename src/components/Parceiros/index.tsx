import styles from '../../styles/Parceiros.module.scss'

export default function Parceiros() {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1>Parceiros</h1>
                <div className={styles.container_card}>
                    <div>
                        <h2>Governo do RN</h2>
                        <p>Governo do Estado do Rio Grande do Norte.</p>
                    </div>
                    <div>
                        <h2>SESAP</h2>
                        <p>Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</p>
                    </div>
                    <div>
                        <h2>UFRN</h2>
                        <p>Universidade Federal do Rio Grande do Norte.</p>
                    </div>
                    <div>
                        <h2>HUOL</h2>
                        <p>Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte). </p>
                    </div>
                </div>
            </div>
        </section>
    );
}