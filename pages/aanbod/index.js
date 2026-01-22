import { Footer, Services, OurMethods, NavBarBg, PageHead } from '@features'
import { FadeIn, Accordion, PartnerStrip, Container } from '@atoms'

const Methods = ({ page }) => {
  return (
    <>
      {page.search_engines && <PageHead data={page.search_engines} />}
      <main>
        <NavBarBg />
        <div>
          <OurMethods page={page} />
          <FadeIn>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 48,
              }}
            >
              <h2 style={{ marginBottom: 0 }}>Start nu jouw traject!</h2>
            </div>
          </FadeIn>
          <FadeIn>
            <Services services={page.services.services.data} />
          </FadeIn>
          <Container narrow>
            {page.accordions &&
              page.accordions.map((accordion, i) => {
                return (
                  <FadeIn key={i}>
                    <div className='container'>
                      <Accordion accordion={accordion} />
                    </div>
                  </FadeIn>
                )
              })}
          </Container>
        </div>
        {page.partners && <PartnerStrip partners={page.partners} />}
        <Footer />
      </main>
    </>
  )
}

// Libs
import axios from 'axios'

// Fetch data from the server
export async function getServerSideProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/werkwijze`,
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

export default Methods
