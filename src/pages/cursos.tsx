import Layout from "../components/Layout";

const descriptionPage = 'Cursos';

export default function Cursos() {
    return (
        <Layout
            title='Cursos | Elder Book'
            description={descriptionPage}>
            <main>
                <h1>Cursos</h1>
            </main>
        </Layout>
    );
}