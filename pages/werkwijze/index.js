// Components
import Hero from "@components/ui-components/Hero";
import OurMethods from "@components/page-components/OurMethods";
import MethodsServices from "@components/page-components/MethodsServices";
import TextBlock from "@ui/TextBlock";
import Footer from "@ui/layout/Footer";

const Methods = () => {
  const image =
    "https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3028&q=80";

  const location = {
    title: "Locatie",
    content:
      "Wil jij het maximale uit jezelf halen? Mentaal sterker worden en je prestaties verbeteren? Dan ben je hier op het juiste adres. Mijn naam is Chloé Webers. Wil jij het maximale uit jezelf halen? Mentaal sterker worden en je prestaties verbeteren? Dan ben je hier op het juiste adres. Mijn naam is Chloé Webers. Wil jij het maximale uit jezelf halen? Mentaal sterker worden en je prestaties verbet",
  };

  const expenses = {
    title: "Vergoedingen",
    content:
      "Wil jij het maximale uit jezelf halen? Mentaal sterker worden en je prestaties verbeteren? Dan ben je hier op het juiste adres. Mijn naam is Chloé Webers. Wil jij het maximale uit jezelf halen? Mentaal sterker worden en je prestaties verbeteren? Dan ben je hier op het juiste adres. Mijn naam is Chloé Webers. Wil jij het maximale uit jezelf halen? Mentaal sterker worden en je prestaties verbet",
  };

  return (
    <div>
      <Hero image={image} title="Onze werkwijze" />
      <OurMethods />
      <MethodsServices />
      <TextBlock data={location}/>
      <TextBlock data={expenses}/>
      <Footer/>
    </div>
  );
};

export default Methods;
