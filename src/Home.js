import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomValue,setRoomValue]=useState('')
console.log(roomValue);
const navigate=useNavigate()

const Submit=(event)=>{
  event.preventDefault()
  console.log(event);
  navigate(`/room/${roomValue}`)

}
    return (
        <div>
            <h1>Home</h1>
            <form  onSubmit={(e)=>Submit(e)}>
        <input 
       
        type='text'
        placeholder='Create Room'
        value={roomValue}
        onChange={(e)=>setRoomValue(e.target.value)}/>
        <button type='submit'>Create Room</button>
      </form>
        </div>
    );
};

export default Home;