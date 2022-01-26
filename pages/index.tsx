// Components
import Hero from "@components/ui-components/Hero";
import About from "@components/page-components/About";
import MentalTraining from "@components/page-components/MentalTraining";
import Services from "@components/page-components/Services";
import Clients from "@components/page-components/Clients";
import PartnerStrip from "@components/ui-components/PartnerStrip";

// Animated wrapper
import FadeIn from "@components/animated-components/FadeIn";

const Home = ({page}) => {

  return (
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
        <Services services={page.services.services.data} />
      </FadeIn>
      <FadeIn>
        <Clients clients={page.clients} />
      </FadeIn>
      <FadeIn>
        <PartnerStrip partners={page.partners[0]} />
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
