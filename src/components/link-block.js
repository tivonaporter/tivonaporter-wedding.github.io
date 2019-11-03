import React from "react"
import Button from "../components/button"

const LinkBlock = ({children, title, heading, details, buttonText, url}) => {
  return (<div class="link-block">
    {children}
    <h2 style={{
      marginTop: `1rem`,
    }}>{title}</h2>
    <p>{details}</p>
    <Button
      title={buttonText}
      target="_blank"
      url={url}
    />
  </div>)
}

export default LinkBlock
