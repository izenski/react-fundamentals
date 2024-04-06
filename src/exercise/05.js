// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const Box = (boxSize,bgColor) => <div className={`box box--${boxSize}`} style={{fontStyle: 'italic', backgroundColor: bgColor}}>{boxSize} {bgColor} box</div>;


const smallBox = Box("small","lightblue");
const mediumBox = Box("medium","pink");
const largeBox = Box("large","orange");

// const smallBox = <div className="box box--small" style={{fontStyle: 'italic',backgroundColor: 'lightblue'}} >small lightblue box</div>
//const mediumBox = <div className="box box--medium" style={{fontStyle: 'italic', backgroundColor: 'pink'}}>medium pink box</div>
//const largeBox = <div className="box box--large"  style={{fontStyle: 'italic', backgroundColor: 'orange'}}>large orange box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
