import React from "react";


function App(){
    const [year, setYear] = useState(2022)
    return(
        <>
        <p>올해 :{year}</p>
        <button onClick={click}>1년 추가</button>
        </>
    )
    function click(){
        setYear(year + 1)
    }
}





export default App