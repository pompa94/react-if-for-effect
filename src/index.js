import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

function App(props){
  const [count,setCount] = useState(0)
  // 무조건 작동
  useEffect(()=>{console.log('effect0')});
  // 변경된다음엔 안나옴 기준이 없음
  useEffect(()=>{console.log('effect1',count)},[]);
  // 변경된 count값을 받아서 작동함
  useEffect(()=>{console.log('effect2',count)},[count]);
  return(
    <div>
      <h1>effect 기본{props.title}</h1>
      <p>count변경보기 : {count}</p>
      <button onClick={click}>click</button>
    </div>
  )
  function click(){
    setCount(count + 1)
  }
}




const root = document.querySelector('#root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App title="welcome" />
  </React.StrictMode>
)