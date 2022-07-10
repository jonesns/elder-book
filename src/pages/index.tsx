import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Parceiros from '../components/Parceiros'
import { SlideSlider } from '../components/Slide/SlideCarrousel'
import { slides_carrousel } from '../slides-mock.json'

const Home: NextPage = () => {
  const descriptionPage = `O Ambiente Virtual de Aprendizagem do SUS, AVASUS, é uma plataforma que vem
  auxiliando na transformação do cotidiano da saúde pública brasileira por meio da formação continuada em trabalho`

  return (
    <Layout
      title='Elder Book'
      description={descriptionPage}>
      <main className='main-container'>
        <section className='slider'>
          <SlideSlider slides={slides_carrousel} />
        </section>
        <Parceiros />
      </main>
    </Layout>
  )
}

export default Home
