import React from "react";
import ReactDOM from "react-dom/client";


const List = ['title1','title2','title3']

function App(props){
  // console.log(props.title)
  const a = props.title
  return(
    <ul>
      {
      a.map(
        (item,index) => (<li key={index}>{item}</li>)
        )
      }
    </ul>
  )
}



const root = document.querySelector('#root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App title={List} />
  </React.StrictMode>
)