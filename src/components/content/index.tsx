type ContentProps = {
    children?: any;
}

export default function Content (props: ContentProps) {
    return (
        <main>
            {props.children}
        </main>
    );
}