// Components
import NavBarBg from "@ui/layout/NavBarBg";
import OurMethods from "@components/page-components/OurMethods";
import MethodsServices from "@components/page-components/MethodsServices";
import TextBlock from "@ui/TextBlock";
import Footer from "@ui/layout/Footer";

const Methods = ({ page }) => {
  return (
    <div>
      <NavBarBg />
      <OurMethods page={page} />
      <MethodsServices services={page.services.services.data} />
      <TextBlock data={page.location} />
      <TextBlock data={page.expenses} />
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
