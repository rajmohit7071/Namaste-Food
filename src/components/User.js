
import { useState,useEffect } from "react";

const User = () => {
const [count,setcount]=useState(0);

  return (
    <div className="User-Card">
      <h2>Name:Mohit</h2>
      <h3>Location:NOIDA</h3>
      <h4>Contact:@Mohit</h4>
      <h4>count :{count}</h4>
      <button onClick={()=>{
        setcount((prev)=>{
          return prev+1;

        })
      }}>
Click Here
      </button>
    </div>
  )
}

export default User;
