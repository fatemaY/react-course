import React from 'react';
import LoginStatus from './LoginStatus';
import Greeting from './Greeting';

const ChildComponent2 = (props) => {
  return (
    <div>
      {/* <h3>Child Component 2</h3> */}
      <Greeting userName={props.userName} />
      <LoginStatus />
    </div>
  );
};

export default ChildComponent2;