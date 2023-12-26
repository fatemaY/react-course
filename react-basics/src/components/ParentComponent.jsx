import React from 'react'
// import ChildComponent1 from './ChildComponent1'
// import ChildComponent2 from './ChildComponent2'

import Greeting from './Greeting'

 const ParentComponent = (props) => {
  return (
    <>
    <Greeting userName={"Parent"} />
    <div>{props.children}</div>
  
    </>
    )
}
export default ParentComponent;
