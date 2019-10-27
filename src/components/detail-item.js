import React from "react"

const DetailItem = ({ type,title,detail1,detail2 }) => (
  <div>
    <h5>{type}</h5>
    <h2>{title}</h2>
    <p style={{
      marginBottom: `.3rem`,
    }}>{detail1}</p>
    <p>{detail2}</p>
  </div>
)

export default DetailItem
