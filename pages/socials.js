import NavBarBg from '@ui/layout/NavBarBg'
import Services from '@components/page-components/Services'
import Events from '@components/page-components/Events'
import Clients from '@components/page-components/Clients'
import PartnerStrip from '@ui/PartnerStrip'
import Footer from '@ui/layout/Footer'

const Socials = ({page}) => {

    const events = [
        {
            id: 1,
            type: 'event',
            title: 'Workshop omgaan met spanning',
            subtitle: '',
            location: 'ArTez Arnhem & Nijmegen',
            date: new Date('05-08-2021'),
            url: ''
        },
        {
            id: 2,
            type: 'event',
            title: 'Workshop omgaan met spanning',
            subtitle: '',
            location: 'ArTez Arnhem & Nijmegen',
            date: new Date('09-24-2021'),
            url: ''
        },
        {
            id: 3,
            type: 'event',
            title: 'Workshop omgaan met spanning',
            subtitle: '',
            location: 'ArTez Arnhem & Nijmegen',
            date: new Date('05-12-2021'),
            url: ''
        },
        {
            id: 4,
            type: 'article',
            title: 'Workshop omgaan met spanning',
            subtitle: '',
            location: 'ArTez Arnhem & Nijmegen',
            date: new Date('09-09-2021'),
            url: ''
        },
        {
            id: 5,
            type: 'blog',
            title: 'Lees meer over je welzijn',
            subtitle: '5-min read',
            location: 'ArTez Arnhem & Nijmegen',
            date: new Date(Date.now()),
            url: 'https://www.arble.travel'
        },
    ]

    return (
        <main>
            <NavBarBg />
            <Services services={page.services.services.data} />
            <Events events={events} />
            <Clients clients={page.clients} />
            <PartnerStrip partners={page.partners[0]} />
            <Footer/>
        </main>
    )
}

// Libs
import axios from 'axios';

// Fetch data from the server
export async function getServerSideProps(context) {

  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/homepage`)
  
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