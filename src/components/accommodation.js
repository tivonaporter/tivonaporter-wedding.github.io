import React from "react"
import Badge from "../components/badge"

const Accommodation = ({ badgeTitle,badgeColor,name,price,airportDist,venueDist,url }) => (
  <div class="accommodation">
    <Badge
      title={badgeTitle}
      color={badgeColor}
    />
    <h4>{name}</h4>
    <p>From {price} per night</p>
    <p>{airportDist} from Airport</p>
    <p>{venueDist} from Venue</p>
    <a href={url} target="_blank">Book Now</a>
  </div>
)

export default Accommodation
