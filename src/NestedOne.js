import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';

const NestedOne = () => {
  const [data, setData] = useOutletContext();
  const [ids, setId] = useState(0);

  useEffect(() => {
    setId(1);
  }, []);
 const  Handele=()=>{
    
    setId((prevId) => prevId + 1);
    console.log(ids);
  }
  const fetchData = async () => {
    
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${ids}`);
            setData(response.data);
            console.log(response);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
    

  };
  const {data:todo,isLoading,isError} = useQuery(['user', ids], fetchData,{
    enabled: !!ids>0
  });
    if(data){
        console.log(data.title);
    }

  return (
    <div>
      <h1>one</h1>
      <button onClick={()=>Handele()}>Add</button>
       {isLoading && <p>Loading...</p>}
      {isError && <p>Error: </p>} 
      {/* {todo? "hlw":'hi'} */}
      {/* Render your data here */}
    </div>
  );
};

export default NestedOne;
