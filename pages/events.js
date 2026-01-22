import {
  Footer,
  Clients,
  Events,
  Services,
  NavBarBg,
  PageHead,
} from '@features'
import { FadeIn, PartnerStrip } from '@atoms'

const EventsPage = ({ page }) => {
  return (
    <>
      {page.search_engines && <PageHead data={page.search_engines} />}
      <main>
        <NavBarBg />
        <FadeIn>
          <Events
            intro={{ title: page.title, intro: page.intro }}
            events={page.events.socials.data}
          />
        </FadeIn>
        <FadeIn>
          {page?.services?.services?.data.length > 0 && (
            <Services services={page.services.services.data} />
          )}
        </FadeIn>
        <FadeIn>
          <Clients clients={page.clients} />
        </FadeIn>
        <PartnerStrip partners={page.partners} />
        <Footer />
      </main>
    </>
  )
}

// Libs
import axios from 'axios'

// Fetch data from the server
export async function getServerSideProps(context) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/socials-page`,
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

export default EventsPage
