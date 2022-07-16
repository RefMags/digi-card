import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer>
      <a href="">
      </a>
      <a href="">
        <span>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          <ion-icon name="logo-linkedin"></ion-icon>
        </span>
        <span>LinkedIn</span>
      </a>
      <a href="">
        <span>
          <ion-icon name="twitter"></ion-icon>
        </span>
        <span>Twitter</span>
      </a>

    </footer>
    
  )
}

