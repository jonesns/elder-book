interface ButtonProps {
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps){
    const cor = props.cor;

    return(
        <button>
            {props.children}
        </button>

    );
}