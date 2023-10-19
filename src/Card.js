import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { remove } from './CardSlice';

const Card = () => {
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    console.log(cart);
    return (
        <div>
           
              <div className='Grid'>
        {cart.map((Title)=>{
        return(
          <div className='Card'>
                <h1>{Title.title}</h1>
                <p>{Title.body}</p>
                <button onClick={()=>dispatch(remove(Title.id))}>Remove</button>
          </div>
      
        )
      })}</div>
        </div>
    );
};

export default Card;