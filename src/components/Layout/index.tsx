import Header from "../Header";
import Head from "next/head";
import { LayoutProps } from "./types";
import Footer from "../Footer";
import Content from "../content";

function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <link rel="icon" href="/favicon.ico" />
                
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
