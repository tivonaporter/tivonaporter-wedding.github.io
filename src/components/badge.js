import React from "react"

const Detail = ({ title,color }) => (
  <div className={`badge badge-${ color }`}>
    <div>{title}</div>
  </div>
)

export default Detail
