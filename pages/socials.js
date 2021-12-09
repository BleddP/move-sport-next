import Services from '@components/page-components/Services'
import Events from '@components/page-components/Events'

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
            date: new Date('09-09-2021'),
            url: ''
        },
        {
            id: 3,
            type: 'article',
            title: 'Lees meer over je welzijn',
            subtitle: '5-min read',
            location: 'ArTez Arnhem & Nijmegen',
            date: new Date(Date.now()),
            url: 'https://www.arble.travel'
        },
    ]

    return (
        <main>
            <Services />
            <Events events={events} />
        </main>
    )
}

export default Socials