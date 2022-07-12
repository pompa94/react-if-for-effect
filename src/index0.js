import React from "react";
import ReactDOM from "react-dom/client";


import Black from "./component/Black"
import White from "./component/White"

function App(props){
  return(
    
    props.title === 'black' ? <Black /> : <White />
    
  )
}



const root = document.querySelector('#root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App title="black" />
  </React.StrictMode>
)