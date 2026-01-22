import axios from 'axios'
import { About, MentalTraining, Services, Clients, Footer } from '@features'
import { Hero, FadeIn, PartnerStrip } from '@atoms'
import { PageHead } from '@features'

const Home = ({ page }) => {
  return (
    <>
      {page.search_engines && <PageHead data={page.search_engines} />}
      <main className='homepage'>
        <Hero type='homepage' header={page.header} />
        <About h1Header={false} data={page.about_me} homepage />
        <FadeIn>
          <MentalTraining data={page.mental_training} />
        </FadeIn>
        <FadeIn>
          <div
            className='container container--48'
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingBottom: 0,
            }}
          >
            <h2 style={{ marginBottom: 0, marginTop: 24 }}>
              Start nu jouw traject!
            </h2>
          </div>
        </FadeIn>
        <FadeIn>
          <Services services={page.services.services.data} />
        </FadeIn>
        <FadeIn>
          <Clients clients={page.clients} />
        </FadeIn>
        <PartnerStrip partners={page.partners[0]} />
        <Footer />
      </main>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/homepage`,
  )

  if (response.status && response.status < 300) {
    return {
      props: {
        page: response.data.data.attributes,
      },
    }
  } else {
    console.log('Error: ', response)
  }
}

export default Home
