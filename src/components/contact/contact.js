import React from 'react';
import styles from './contact.sass';

import ContactForm from '../contactForm/contactForm.js';
import Footer from '../footer/footer.js';

const Contact = () => {
  return (
    <section className={styles.container}>
      <header className={styles.contactHeader}>
        <p className={styles.sectionHeader}>
          Let's Work Together
        </p>

        <p className={styles.sectionSubHeader}>We can build great things</p>
      </header> 

      <div className={styles.contactForm}>
        <ContactForm />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </section>
  )
}

export default Contact;