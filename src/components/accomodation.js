import React from "react"
import Badge from "../components/badge"

const Accomodation = ({ badgeTitle,badgeColor,name,price,airportDist,venueDist,url }) => (
  <div class="accomodation">
    <Badge
      title={badgeTitle}
      color={badgeColor}
    />
    <h4>{name}</h4>
    <p>From {price} per night</p>
    <p>{airportDist} from Hotel</p>
    <p>{venueDist} from Venue</p>
    <a href="{url}" target="_blank">Book It</a>
  </div>
)

export default Accomodation
