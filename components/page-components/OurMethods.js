import Image from "next/image";

// Icons
import Sparkles from "@assets/icons/sparkles.svg";
import Evaluate from "@assets/icons/evaluate.svg";
import Pulse from "@assets/icons/pulse.svg";
import Complete from "@assets/icons/complete.svg";



const OurMethods = () => {
  return (
    <section className="container container--96">
      <div className="our-methods">
        <div className="our-methods__content">
          <h1>Onze Werkwijze</h1>
          <p>
            Wil jij het maximale uit jezelf halen? Mentaal sterker worden en je
            prestaties verbeteren? Dan ben je hier op het juiste adres. Mijn
            naam is Chloé Webers.
          </p>
        </div>
        <div className="our-methods__grid">
          <div className="method">
            <Image className="method__image" src={Sparkles} alt='sparlkes' width={300} height={300}/>
            <div className="method__content">
              <h4>Intake</h4>
              <p>
                Wil jij het maximale uit jezelf halen? Mentaal sterker worden en
                je prestaties verbeteren? Dan ben je hier op het juiste adres.
                Mijn naam is Chloé Webers.
              </p>
            </div>
          </div>
          <div className="method">
            <Image className="method__image" src={Evaluate} alt='sparlkes' width={300} height={300}/>
            <div className="method__content">
              <h4>Planning</h4>
              <p>
                Wil jij het maximale uit jezelf halen? Mentaal sterker worden en
                je prestaties verbeteren? Dan ben je hier op het juiste adres.
                Mijn naam is Chloé Webers.
              </p>
            </div>
          </div>
          <div className="method">
            <Image className="method__image" src={Pulse} alt='sparlkes' width={300} height={300}/>
            <div className="method__content">
              <h4>Training</h4>
              <p>
                Wil jij het maximale uit jezelf halen? Mentaal sterker worden en
                je prestaties verbeteren? Dan ben je hier op het juiste adres.
                Mijn naam is Chloé Webers.
              </p>
            </div>
          </div>
          <div className="method">
            <Image className="method__image" src={Complete} alt='sparlkes' width={300} height={300}/>
            <div className="method__content">
              <h4>Evaluatie</h4>
              <p>
                Wil jij het maximale uit jezelf halen? Mentaal sterker worden en
                je prestaties verbeteren? Dan ben je hier op het juiste adres.
                Mijn naam is Chloé Webers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMethods;
