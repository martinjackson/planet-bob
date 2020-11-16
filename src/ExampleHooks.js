/* eslint react/prop-types: 0 */

import React, { useState, useEffect } from 'react'

const ExampleHooks = (props) => {

  const [from, setFrom] = useState("...")
  const when = '2020-11-16 11:05am'

  useEffect(() => {
    setTimeout(() => setFrom('React Hooks'), 3000);
  }, [from])

  const sd = {...props.style, background: 'blue', color: 'white'};
  const ss = { maxWidth: '50%', fontSize: 'xx-large' }
  return <div style={sd}>
            <span style={ss}>Hello from {from}</span>
            <span style={ss}>at {when}</span>
         </div>;
}

export default ExampleHooks;