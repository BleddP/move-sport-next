// Components
import NavBarBg from "@components/ui-components/layout/NavBarBg";
import Hero from "@components/ui-components/Hero";
import Accordion from "@components/ui-components/Accordion";
import Trajecten from "@components/page-components/Trajecten";
import ProductPageIntro from "@components/page-components/ProductPageIntro";
import PartnerStrip from "@components/ui-components/PartnerStrip";
import ReactMarkdown from "react-markdown";
import Footer from "@components/ui-components/layout/Footer";

// Animated wrapper
import FadeIn from "@components/animated-components/FadeIn";

const Method = ({ page }) => {
  console.log({ page });
  return (
    <div>
      <NavBarBg />
      <Hero header={page.header} />
      <main className="page-product">
        <div className="container">
          <section className="section">
            <FadeIn>
              <ProductPageIntro data={page.product_intro} />
            </FadeIn>
          </section>

          <section className="section">
            {page.accordions.map((element, i) => {
              if (element.__component === "ui-components.accordion") {
                return (
                  <FadeIn key={i}>
                    <Accordion accordion={element} />
                  </FadeIn>
                );
              }
              if (element.__component === "ui-components.rich-text") {
                return (
                  <FadeIn key={i}>
                    <ReactMarkdown>{element.rich_text}</ReactMarkdown>
                  </FadeIn>
                );
              }
            })}
          </section>
          <section className="section">
            <FadeIn>
              <Trajecten
                intro={page.trajecten_intro}
                trajecten={page.trajecten}
              />
            </FadeIn>
          </section>
        </div>
      </main>
      {/* {page.partners && <PartnerStrip partners={page.partners} />} */}
      <Footer />
    </div>
  );
};

// Libs
import axios from "axios";

// Fetch data from the server
export async function getServerSideProps(context) {
  const pageRequest = context.params.method;
  let endpoint = "";
  if (pageRequest === "individueel") endpoint = "individual";
  if (pageRequest === "zakelijk") endpoint = "business";
  if (pageRequest === "teams") endpoint = "team";

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`
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

export default Method;
