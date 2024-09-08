import React, { useState, useEffect } from 'react';

const RandomNumber = () => {
const [counter,setcounter]=useState(0);
const maxcount=Math.floor(Math.random()* 1001);
useEffect(()=>{
    const interval=setInterval(()=>{
    setcounter(prev=>{
    if(prev<maxcount){
            return prev + 10
        }else{
            clearInterval(interval);
            return prev
        }
    } );
},100);
return()=> clearInterval(interval)
},[])
return (
<div>
    <h1>{counter}</h1>
</div>
);
};
export default RandomNumber;
