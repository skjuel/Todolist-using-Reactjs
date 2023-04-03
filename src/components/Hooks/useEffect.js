import React, { useState, useEffect} from 'react'
import "./style.css";
const UseEffect = () => {
   // const initialData = 10;
const [myNum, setmyNum] = useState(0);
useEffect(() => {
    document.title = `Chats(${myNum})`;
});
  return (
   <>
     <div className="center_div">
     {console.log(myNum)}
        <p>{myNum}</p>
        <div class="Button2" onClick={() => setmyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
     </div>
   </>
  )
}

export default UseEffect