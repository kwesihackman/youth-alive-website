import React from "react";

const Location = () => {
  return (
    <section className="white-section section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3697299596543!2d-0.169029624954993!3d5.659547494321879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8327897db9bd%3A0xe3fd38251a920044!2sICGC%20KABOD%20Assembly!5e0!3m2!1sen!2sgh!4v1708191090664!5m2!1sen!2sgh"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Location;
