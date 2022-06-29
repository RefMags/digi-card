import React from "react"
import ReactDOM  from "react-dom"
import RefPhoto from "../images/ref-photo.jpg"

export default function Infor() {
  return (
    <div>
      <img className="profile-pic"  src={RefPhoto} alt=""  width="45px"/>
      <h2>Ref Mags</h2>
      <h3>Fullstack developer</h3>
      <h3>Fullstack developer</h3>
      <p>email</p>
      
    </div>
  )
}

