// Components
import NavBarBg from "@ui/layout/NavBarBg";
import OurMethods from "@components/page-components/OurMethods";
import MethodsServices from "@components/page-components/MethodsServices";
import Services from "@components/page-components/Services";
import TextBlock from "@ui/TextBlock";
import Footer from "@ui/layout/Footer";

// Animated wrapper
import FadeIn from "@components/animated-components/FadeIn";

const Methods = ({ page }) => {
  return (
    <div>
      <NavBarBg />
      <OurMethods page={page} />
      <FadeIn>
        <Services services={page.services.services.data} />
      </FadeIn>
      <FadeIn>
        <TextBlock data={page.location} />
      </FadeIn>
      <FadeIn>
        <TextBlock data={page.expenses} />
      </FadeIn>
      <Footer />
    </div>
  );
};

// Libs
import axios from "axios";

// Fetch data from the server
export async function getServerSideProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/werkwijze`
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

export default Methods;
