import styles from '../styles/Button.module.scss'

interface ButtonProps {
    link?: string;
    children: any;
    onClick?: () => void;
}

export function ButtonEntrar(props: ButtonProps){

    return(
        <button className={styles.button_entrar}>
            {props.children}
        </button>

    );
}

export function ButtonCadastrar(props: ButtonProps){

    return(
        <button className={styles.button_cadastrar}>
            {props.children}
        </button>

    );
}

export function ButtonAcesse(props: ButtonProps){

    return(
        <button className={styles.button_acesse}>
            {props.children}
        </button>

    );
}