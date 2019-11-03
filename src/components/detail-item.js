import React from "react"

const DetailItem = ({type, title, detail1, detail2, url}) => {
  var linkedDetail = <div>
    <p style={{marginBottom: `.3rem`}}>{detail1}</p>
    <p>{detail2}</p>
  </div>

  if (url && url.length > 0) {
    linkedDetail = <a href={url} target="blank">{linkedDetail}</a>
  }

  return (
    <div>
      <h5>{type}</h5>
      <h2>{title}</h2>
      {linkedDetail}
    </div>
  )
}

export default DetailItem
