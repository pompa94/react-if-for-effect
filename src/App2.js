import React from "react";

const allSize = (function(small,large){
    let sized = [];
    for(let i=small ; i<=large ; i++){
        sized.push(i)
        sized.push(i + 0.5)
    }
    return sized;
})(7,13);

function ProSize(){
    function optionSize(){
        let sizes = allSize
        return sizes.map((item,index)=>{
            return(
                <option value={item} key={index}>{item}</option>
            )
        })
    }

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