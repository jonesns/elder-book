import Layout from "../components/Layout";

const descriptionPage = 'Parceiros';

export default function Parceiros() {
    return (
        <Layout
            title='Parceiros | Elder Book'
            description={descriptionPage}>
            <main>
                <h1>Parceiros</h1>
            </main>
        </Layout>
    );
}