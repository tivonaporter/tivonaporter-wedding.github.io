import React from "react"

const Button = ({title,url,target}) => {
  return <a class="btn btn-primary" href={url} target={target}>{title}</a>
}

export default Button
