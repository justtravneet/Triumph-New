import React from 'react'
// import Herothree from './Herothree'

import Heroflex from './Heroflex'
import Herocounter from './Herocounter'
import Herocards from './Herocards'
import Herocardtwo from './Herocardtwo'
import Heroone from './Heroone'
import Herolast from './Herolast'

const Home = () => {
  return (
    <div>
         <Heroone />
         {/* <Herothree /> */}
         <Herocards />
         <Herocardtwo />
         <Heroflex />
         <Herocounter />
         <Herolast />
    </div>
  )
}

export default Home
