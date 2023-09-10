
import { useEffect, useState } from 'react';
import './App.css';
import { Pagination } from 'antd';

function App() {
  const [data,setData]=useState([]);
  const [total,setTotal]=useState('');
  const [page,setPage]=useState(1)
  const [postPerPage,setPostPerPage]=useState(10)

  useEffect(()=>{
    fetch('  https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {
      setData(json)
      // console.log(json.length)
      setTotal(json.length)
    })
  },[]);
  const indexofLastPage= page + postPerPage;
  console.log(indexofLastPage)
  const indexofFirstPage= indexofLastPage - postPerPage;
  console.log(indexofFirstPage)
  const currentPage= data.slice(indexofFirstPage,indexofLastPage)
  return (
    <div className="App">
     

     {
      currentPage.map((item,index)=>(
        <h3>{item.body}</h3>
      ))
     }
     <Pagination
     onChange={(value)=>setPage(value)}
     pageSize={postPerPage}
     total={total}
     current={page}
     
     />

     
    </div>
  );
}

export default App;
