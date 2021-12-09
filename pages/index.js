// Components 
import Hero from '@components/ui-components/Hero'
import About from '@components/page-components/About'
import MentalTraining from '@components/page-components/MentalTraining'
import Services from '@components/page-components/Services'
import Clients from '@components/page-components/Clients'
import PartnerStrip from '@components/ui-components/PartnerStrip'
import Contact from '@components/page-components/Contact'

const Home = () => {
  const image = 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3028&q=80'

  return (
    <div>
      <Hero type='homepage' image={image} />
      <About/>
      <MentalTraining />
      <Services />
      <Clients />
      <PartnerStrip />
      <Contact />
    </div>
  )
}

export default Home