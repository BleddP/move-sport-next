// NextJS
import Image from "next/image";

// Components
import NavBarBg from "@components/ui-components/layout/NavBarBg";
import Hero from "@components/ui-components/Hero";
import Accordion from "@components/ui-components/Accordion";
import Approaches from "@components/page-components/Approaches";
import PartnerStrip from "@components/ui-components/PartnerStrip";
import Footer from "@components/ui-components/layout/Footer";

// Animated wrapper
import FadeIn from "@components/animated-components/FadeIn";

const Method = ({ page }) => {
  const offers = [
    {
      id: 1,
      title: "Traject 1",
      content: "Some content",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      button: {
        to: "/contact",
        text: "Neem contact op",
        type: "primary",
        target: "internal",
      },
    },
    {
      id: 2,
      title: "Traject 2",
      content: "Some content",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      button: {
        to: "/contact",
        text: "Neem contact op",
        type: "primary",
        target: "internal",
      },
    },
    {
      id: 3,
      title: "Traject 3",
      content: "Some content",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      button: {
        to: "/contact",
        text: "Neem contact op",
        type: "primary",
        target: "internal",
      },
    },
  ];

  page.header.title = "Ons aanbod voor teams";
  page.header.buttons = [];

  return (
    <div>
      <NavBarBg />
      <Hero header={page.header} />
      <main className="page-product">
        <div className="container">
          <FadeIn>
            <section className="section">
              <div className="columns columns--2-col">
                <div>
                  <h1>Wat is het</h1>
                  <p>
                    Sportpsychologie voor (sport) teams is vaak gericht op het
                    verbeteren van het welzijn, procesverbetering en resultaat;
                    de ontwikkeling van het team, het verbeteren van de
                    samenwerking en communicatie, het vergroten van de mentale
                    weerbaarheid en het verbeteren van de teamprestaties om op
                    deze manier het beste uit alle teamleden en elkaar te kunnen
                    halen.
                  </p>
                  <h2>Voorbeelden</h2>
                  <ul>
                    <li>Meer dan 1 team willen worden</li>
                    <li>Meer dan 1 team willen worden</li>
                    <li>Als team kunnen samenwerken</li>
                    <li>
                      Inzicht krijgen in teamkwaliteiten en aandachtspunten
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  />
                </div>
              </div>
            </section>
          </FadeIn>

          <section className="section">
            <FadeIn>
              <Accordion
                accordion={{
                  title: "Voor wie is het?",
                  content:
                    "Voor teams in organisatie zoals het bedrijfsleven, management, een vereniging, het leger, performance teams en sportteams of besturen binnen een vereniging of club.",
                }}
              />
            </FadeIn>
            <FadeIn>
              <Accordion
                accordion={{
                  title: "Wat zijn de mogelijkheden?",
                  content:
                    "Voor teams in organisatie zoals het bedrijfsleven, management, een vereniging, het leger, performance teams en sportteams of besturen binnen een vereniging of club.",
                }}
              />
            </FadeIn>
          </section>
          <section className="section">
            <FadeIn>
              <div>
                <h3>Traject op maat?</h3>
                <p>
                  Neem contact op dan kijken we samen naar de wensen en exacte
                  invulling hiervan en wordt er een offerte opgesteld.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <Approaches approaches={offers} />
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
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/homepage`
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
