import React from 'react';
import CommentForm from './CommentForm'; // Import the CommentForm component

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function ContactPage() {
  return (
    <section>
      <h2>Contact <FontAwesomeIcon icon={faUser} /> </h2>
      <p>Reach out via email: aqnguyen@ucsd.edu</p>
      <h3>Leave a Comment</h3>
      <CommentForm />  
    </section>
  );
}

export default ContactPage;
