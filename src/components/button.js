import React from "react"

const Button = ({title,url,target}) => {
  return <a href={url} target={target}>{title}</a>
}

export default Button
