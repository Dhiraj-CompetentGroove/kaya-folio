import React from "react";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flashes from a very large icon down to a properly sized one
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent Font Awesome from adding its CSS since we already did it manually above
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.css";

const socialLinks = [
  {
    faIcon: faLinkedinIn,
    alt: "Linkedin",
    url: "https://www.linkedin.com/in/evanitsg/",
  },
  {
    faIcon: faGithub,
    alt: "GitHub",
    url: "https://github.com/digipie",
  },
  {
    faIcon: faEnvelopeOpen,
    alt: "Email",
    url: "mailto:evan.it.sg@gmail.com",
  },
];

function SocialLink({ faIcon, alt, url }) {
  return (
    <li>
      <a href={url}>
        <FontAwesomeIcon alt={alt} title={alt} icon={faIcon} size="1x" /> {alt}
      </a>
    </li>
  );
}

function SocialLinks() {
  return (
    <ul className={styles.socialLinkList}>
      {socialLinks.map((props, idx) => (
        <SocialLink key={idx} {...props} />
      ))}
    </ul>
  );
}

export default SocialLinks;
