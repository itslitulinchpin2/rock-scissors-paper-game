import React from 'react'

const Box = (props) => {

  const getStyle=(result)=>{
    
    if (result=="tie"){
      console.log("자 겟스타일함수 시작!", result)
      return {
        border: "1px solid gray"
      }
    } else if (result=="win"){
      console.log("자 겟스타일함수 시작!", result)
      return {border: "3px solid green"}
    } else if (result=="lose"){
      console.log("자 겟스타일함수 시작!", result)
      return {border: "3px solid red"}
    }
  }

  return (
    <div className="box" style={getStyle(props.result)}>
        <h1>{props.item && props.item.name}</h1>
        <img className="item-img" src={props.item && props.item.img}></img>
        <h2>{props.result}</h2>
    </div>
  )
}

export default Box
