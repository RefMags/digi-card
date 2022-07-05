import React from "react"
import ReactDOM  from "react-dom"
import RefPhoto from "../images/ref-photo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Infor() {
  return (
    <div>
      <img className="profile-pic"  src={RefPhoto} alt="" />
      <div>
        <h1>Refilwe Magwaneng</h1>
        <h4>Developer/Researcher</h4>
        <button className="email"> <FontAwesomeIcon icon={faEnvelope} className="envelope"></FontAwesomeIcon>Email</button>
      </div> 
    </div>
  )
}

