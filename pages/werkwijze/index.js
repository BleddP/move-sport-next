// Components
import NavBarBg from "@ui/layout/NavBarBg";
import OurMethods from "@components/page-components/OurMethods";
import MethodsServices from "@components/page-components/MethodsServices";
import TextBlock from "@ui/TextBlock";
import Footer from "@ui/layout/Footer";

const Methods = () => {
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
      <NavBarBg />
      <OurMethods />
      <MethodsServices />
      <TextBlock data={location}/>
      <TextBlock data={expenses}/>
      <Footer/>
    </div>
  );
};

export default Methods;
