import React, { Fragment } from 'react'


const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatThisSushi(props.data)}>
        { 
          props.eatenYesNo(props.data) ? null : <img src = { props.data.img_url} width = "100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.data.name} - ${props.data.price}
      </h4>
    </div>
  )
}

export default Sushi