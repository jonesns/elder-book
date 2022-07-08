import Header from "../Header";
import Head from "next/head";
import { LayoutProps } from "../../types/types";

function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="O Ambiente Virtual de Aprendizagem do SUS, AVASUS, é uma plataforma que vem auxiliando na transformação do cotidiano da saúde pública brasileira por meio da formação continuada em trabalho" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <h1>Hello Word!!</h1>
        </>

    );
}

export default Layout;
