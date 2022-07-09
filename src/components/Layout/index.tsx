import Header from "../Header";
import Head from "next/head";
import { LayoutProps } from "../../types/types";
import Footer from "../Footer";
import Content from "../content";

function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <link rel="icon" href="/favicon.ico" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet" />

            </Head>
            <Header />
            <Content>
                {props.children}
            </Content>
            <Footer />
        </>
    );
}

export default Layout;
