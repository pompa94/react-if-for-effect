import React from "react";
import ReactDOM from "react-dom/client";


import Black from "./component/Black"
import White from "./component/White"

function App(props){
  const a = props.title
    if(a){
      return <Black />
    }
    else{
      return <White />
    }
    

}



const root = document.querySelector('#root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App title={false} />
  </React.StrictMode>
)