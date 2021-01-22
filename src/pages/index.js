import React from "react";
import Hero from "../sections/landing4/Hero";
import Clients from "../sections/landing4/Clients";
import Feature from "../sections/landing4/Feature";
import Content1 from "../sections/landing4/Content1";
import Content2 from "../sections/landing4/Content2";
import Testimonial from "../sections/landing4/Testimonial";
import CTA from "../sections/landing4/CTA";
import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        {/*<Hero />*/}
        {/*<Clients />*/}
        {/*<Feature />*/}
        {/*<Content1 />*/}
        <Content2 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
