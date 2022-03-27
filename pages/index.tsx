// Components
import Hero from "@components/ui-components/Hero";
import About from "@components/page-components/About";
import MentalTraining from "@components/page-components/MentalTraining";
import Services from "@components/page-components/Services";
import Clients from "@components/page-components/Clients";
import PartnerStrip from "@components/ui-components/PartnerStrip";
import Footer from '@components/ui-components/layout/Footer'

// Head
import GenerateHead from '../components/head/GenerateHead'

// Animated wrapper
import FadeIn from "@components/animated-components/FadeIn";

const Home = ({ page }) => {

  return (
    <>
      {page.search_engines &&
        <GenerateHead data={page.search_engines} />
      }
      <main>
        <Hero
          type="homepage"
          header={page.header}
        />
        <About data={page.about_me} />
        <FadeIn>
          <MentalTraining data={page.mental_training} />
        </FadeIn>
        <FadeIn>
          <div className="container container--48" style={{width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: 0}}>
          <h2 style={{marginBottom: 0}}>Start nu jou traject!</h2>
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
  );
};

// Libs
import axios from 'axios';

// Fetch data from the server
export async function getServerSideProps(context: any) {

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

export default Home;
