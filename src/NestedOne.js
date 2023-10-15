import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice';
import { fetchPosts } from './PostSlice';
import Title from 'antd/es/skeleton/Title';

const NestedOne = () => {
  const [data, setData] = useOutletContext();
  const [ids, setId] = useState(0);
  const count = useSelector((state) => state.shaharia.value)
  const {Loading,error,posts} = useSelector((state) => state.posts)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
    setId(1);
  }, []);
 const  Handele=()=>{
    
    setId((prevId) => prevId + 1);
    // console.log(ids);
  }
  const fetchData = async () => {
    
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${ids}`);
            setData(response.data);
            // console.log(response);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
    

  };
  const {data:todo,isLoading,isError} = useQuery(['user', ids], fetchData,{
    enabled: !!ids>0
  });
    if(data){
        // console.log(data.title);
    }

  return (
    <div>
      <h1>one</h1>
      {<p>Redux Value : {count}</p>}
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={()=>dispatch(incrementByAmount(5))}>
          Payload
        </button>
      <button onClick={()=>Handele()}>Add</button>
       {isLoading && <p>Loading...</p>}
      {isError && <p>Error: </p>} 
      {/* {todo? "hlw":'hi'} */}
      {/* Render your data here */}
      <div>{posts.map((Title)=>{
        return(
          <h1>{Title.title}</h1>
        )
      })}</div>
    </div>
  );
};

export default NestedOne;
