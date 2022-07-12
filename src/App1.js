import React from "react";

const allSize = ['7','8','9','10','11','12','13']

function ProSize(){
    // 함수
    function optionSize(){
        let sizes = allSize
        return sizes.map((item,index)=>{
            return(
                <option value={item} key={index}>{item}</option>
            )
        })
    }
    // 내보내는것
    return(
        <p>
            <label htmlFor="size">size :</label>
            <select id="size">{optionSize()}</select>
        </p>
    )
}

function App(){
    return(<ProSize />)
}





export default App