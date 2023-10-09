import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
        <h1>{props.user}</h1>
        <img className="item-img" src="https://www.creativefabrica.com/wp-content/uploads/2020/02/06/1580976980/Scissors.jpg"></img>
        <h2>WIN</h2>
    </div>
  )
}

export default Box
