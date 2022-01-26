import NavBarBg from '@ui/layout/NavBarBg'
import Services from '@components/page-components/Services'
import Events from '@components/page-components/Events'
import Clients from '@components/page-components/Clients'
import PartnerStrip from '@ui/PartnerStrip'
import Footer from '@ui/layout/Footer'

const Socials = ({page}) => {
    return (
        <main>
            <NavBarBg />
            <Services services={page.services.services.data} />
            <Events events={page.events.socials.data} />
            <Clients clients={page.clients} />
            <PartnerStrip partners={page.partners} />
            <Footer/>
        </main>
    )
}

// Libs
import axios from 'axios';

// Fetch data from the server
export async function getServerSideProps(context) {

  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/socials-page`)
  
  if (response.status && response.status < 300) {
    return {
      props: {
        page: response.data.data.attributes
      }
    }
  } else {
    console.log('Error: ', response)
  }
}

export default Socials