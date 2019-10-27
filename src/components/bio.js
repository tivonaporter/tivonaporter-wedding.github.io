import React from "react"

const Bio = ({ title,name,details }) => (
  <div class="row bio">
    <div class="col-6 lg-col-2">
      <h2>{title}</h2>
    </div>
    <div class="col-6 lg-col-4">
      <h4>{name}</h4>
      <p>{details}</p>
    </div>
  </div>
)

export default Bio
