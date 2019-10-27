import React from "react"

const Detail = ({ date,time,title,detail }) => (
  <div class="agenda-item">
    <h6>{date} at {time}</h6>
    <h4>{title}</h4>
    <p>{detail}</p>
  </div>
)

export default Detail
