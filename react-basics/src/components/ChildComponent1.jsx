import React from 'react'
import FeatureToggler from './FeatureToggler'
import Greeting from './Greeting'
 const ChildComponent1 = (props) => {
  return (
    <div>
        <Greeting userName={props.userName} />
        <FeatureToggler />

    </div>
  )
}
export default ChildComponent1