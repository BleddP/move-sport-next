// Components
import Hero from "@components/ui-components/Hero.tsx";
import About from "@components/page-components/About";
import MentalTraining from "@components/page-components/MentalTraining";
import Services from "@components/page-components/Services";
import Clients from "@components/page-components/Clients";
import PartnerStrip from "@components/ui-components/PartnerStrip";
import Contact from "@components/page-components/Contact";

// Animated wrapper
import FadeIn from "@components/animated-components/FadeIn";

const Home = ({page}) => {
  return (
    <main>
      <Hero
        type="homepage"
        header={page.header}
        title="Start vandaag nog jou mentale traject"
      />
      <About />
      <FadeIn>
        <MentalTraining />
      </FadeIn>
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <Clients />
      </FadeIn>
      <FadeIn>
        <PartnerStrip />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </main>
  );
};

// Libs
import axios from 'axios';

// Fetch data from the server
export async function getServerSideProps(context: any) {

  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/homepage`)
  
  if (response.status && response.status < 300) {
    console.log(response.data.data)
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
