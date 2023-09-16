import React from 'react';
import { useOutletContext } from "react-router-dom";
const NestedOne = () => {
    const [data,setData] = useOutletContext();
    console.log(data);
    return (
        <div>
            <h1 >one</h1>
            {/* <h1 onClick={()=>setCount((c) => c + 1)}>one</h1> */}
        </div>
    );
};

export default NestedOne;