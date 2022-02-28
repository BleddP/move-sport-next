// Components
import LinkedSteps from "@components/page-components/LinkedSteps";

const OurMethods = ({ page }) => {
  const steps = page.methods.methods.data;

  return (
    <section className="container container--96">
      <div className="our-methods">
        <div className="our-methods__content">
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
        <div>
          <LinkedSteps steps={steps} />
        </div>
      </div>
    </section>
  );
};

export default OurMethods;
