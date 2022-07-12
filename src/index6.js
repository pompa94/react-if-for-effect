import React,{useState} from "react";
import ReactDOM from "react-dom/client";

function App(){
  const [year, setYear] = useState(2022)
  return(
      <div>
      <p>올해는 : {year}</p>
      <button onClick={click}>더하기</button>
      </div>
  )
  function click(){
      setYear(year + 1)
  }
}




const root = document.querySelector('#root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)