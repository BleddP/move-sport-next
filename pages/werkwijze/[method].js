// NextJS

// Components
import NavBarBg from "@components/ui-components/layout/NavBarBg";
import Hero from "@components/ui-components/Hero";
import Accordion from "@components/ui-components/Accordion";

const Method = ({ page }) => {
  return (
    <div>
      <NavBarBg />
      <main className="page-method">
        <Hero header={page.header} />
        <div className="container">
          <h1>Wat is het</h1>
          <p>
            Sportpsychologie voor (sport) teams is vaak gericht op het
            verbeteren van het welzijn, procesverbetering en resultaat; de
            ontwikkeling van het team, het verbeteren van de samenwerking en
            communicatie, het vergroten van de mentale weerbaarheid en het
            verbeteren van de teamprestaties om op deze manier het beste uit
            alle teamleden en elkaar te kunnen halen.
          </p>
          <h2>Voorbeelden</h2>
          <ul>
            <li>Meer dan 1 team willen worden</li>
            <li>Meer dan 1 team willen worden</li>
            <li>Als team kunnen samenwerken</li>
            <li>Inzicht krijgen in teamkwaliteiten en aandachtspunten</li>
          </ul>
          <div className="accordion">
            <Accordion
              accordion={{ title: "Voor wie is het?", content: "Voor teams in organisatie zoals het bedrijfsleven, management, een vereniging, het leger, performance teams en sportteams of besturen binnen een vereniging of club." }}
            />
          </div>
          <div>
            <h3>Trajecten op maat:</h3>
            <div>
              <span>Card 1</span>
            </div>
            <div>
              <span>Card 2</span>
            </div>
            <div>
              <span>Card 3</span>
            </div>
          </div>
        </div>
      </main>
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
