import React from 'react'

function Alert(props) {
//   const capitalize = (word) => {
//     const lower = word.toLowerCase();
//       return lower.charAt(0).toUpperCase()=lower.slice(1);
// }

  return (
     //if props.alert shows fall that means null then do nothing and if props.alert is not null then run the remaining program
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong>: {props.alert.msg} 
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}

export default Alert

