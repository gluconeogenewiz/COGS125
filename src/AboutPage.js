import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function AboutPage() {
  return (
    <section>
      <h2>About Me <FontAwesomeIcon icon={faUser} /></h2>
      <p>I'm a software developer with a passion for front-end technologies, especially React!</p>
    </section>
  );
}

export default AboutPage;
