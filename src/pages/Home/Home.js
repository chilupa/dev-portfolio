import React from 'react';
import Footer from '../Footer/Footer';

const Home = ({ textColor, backgroundColor }) => {
  const Heading = ({ children }) => (
    <h1 class="f6 f2-m f-subheadline-l fw6 tc">{children}</h1>
  );

  return (
    <article className={`vh-100 dt w-100 bg-${backgroundColor}`}>
      <div className={`dtc v-mid tc ${textColor} ph3 ph4-l`}>
        <Heading>Hi, I'm Pavan!</Heading>
        <h3>Full Stack Developer | Writer | Photographer</h3>
        <Footer />
      </div>
    </article>
  );
};

export default Home;
