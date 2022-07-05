import React from "react"
import ReactDOM  from "react-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  return (
    <div>
      <a href="">
        <span>
          <ion-icon name="logo-github"></ion-icon>
        </span>
        <span>Github</span>
      </a>
      <a href="">
        <span>
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
    </div>
  )
}

