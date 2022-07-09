import styles from './Button.module.scss'

interface ButtonProps {
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