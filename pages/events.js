// Components
import NavBarBg from "@ui/layout/NavBarBg";
import Services from "@components/page-components/Services";
import Events from "@components/page-components/Events";
import Clients from "@components/page-components/Clients";
import PartnerStrip from "@ui/PartnerStrip";
import Footer from "@ui/layout/Footer";

// Head
import GenerateHead from "@components/head/GenerateHead";

// Animated wrapper
import FadeIn from "@components/animated-components/FadeIn";

const EventsPage = ({ page }) => {
  return (
    <>
      {page.search_engines && <GenerateHead data={page.search_engines} />}
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
  );
};

// Libs
import axios from "axios";

// Fetch data from the server
export async function getServerSideProps(context) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/socials-page`
  );

  if (response.status && response.status < 300) {
    return {
      props: {
        page: response.data.data.attributes,
      },
    };
  } else {
    console.log("Error: ", response);
  }
}

export default EventsPage;
