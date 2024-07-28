import React from "react";

const Contact = () => (
  <section id="contact">
    <h2>Contact Me</h2>
    <p>
      If you would like to get in touch, please reach out via one of the
      following methods:
    </p>
    <ul>
      <li>
        Email:{" "}
        <a href="mailto:your-email@example.com">your-email@example.com</a>
      </li>
      <li>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          your-profile
        </a>
      </li>
      <li>
        GitHub:{" "}
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          your-username
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
