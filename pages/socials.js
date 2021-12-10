import NavBarBg from '@ui/layout/NavBarBg'
import Services from '@components/page-components/Services'
import Events from '@components/page-components/Events'
import Clients from '@components/page-components/Clients'
import PartnerStrip from '@ui/PartnerStrip'
import Footer from '@ui/layout/Footer'

const Socials = () => {

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
            <Services />
            <Events events={events} />
            <Clients />
            <PartnerStrip />
            <Footer/>
        </main>
    )
}

export default Socials