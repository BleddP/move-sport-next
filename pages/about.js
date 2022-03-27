// Components
import NavBarBg from "@ui/layout/NavBarBg";
import About from "../components/page-components/About";
import Footer from "../components/ui-components/layout/Footer";
import PartnerStrip from "../components/ui-components/PartnerStrip";

// Head
import GenerateHead from '@components/head/GenerateHead'

const AboutMe = ({ page }) => {
  return (
    <>
      {page.search_engines && <GenerateHead data={page.search_engines} />}
      <main className="page-about">
        <NavBarBg />
        <div className="page-about__content">
          <About data={page} />
        </div>
        {page.partners && <PartnerStrip partners={page.partners} />}
        <Footer />
      </main>
    </>
  );
};

// Libs
import axios from "axios";

// Fetch data from the server
export async function getServerSideProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/about`
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

export default AboutMe;
