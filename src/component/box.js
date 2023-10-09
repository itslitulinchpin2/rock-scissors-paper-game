import React from 'react'

const Box = (props) => {
  console.log(props)
  return (
    <div className="box">
        <h1>{props.item && props.item.name}</h1>
        <img className="item-img" src={props.item && props.item.img}></img>
        <h2>WIN</h2>
    </div>
  )
}

export default Box
