import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';

const Nested = () => {
    const [num,setNumber]=useState(0);
    const cart = useSelector((state) => state.cart)
    // console.log(num)
    // useEffect(()=>{
    //     setNumber(1)
    // },[])
    const [data,setData]=useState([]);
    const [total,setTotal]=useState('');
    const [page,setPage]=useState(1)
    const [postPerPage,setPostPerPage]=useState(10);
    // const [runTime,setRunTime]=useState(false)
  
    useEffect(()=>{
        setNumber(1)
    //   fetch(` https://jsonplaceholder.typicode.com/posts/${num}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     // console.log(json)
    //     setData(json)
    //     // console.log(json.length)
    //     setTotal(json.length)
    //   })
    },[num]);
    const indexofLastPage= page + postPerPage;
    // console.log(indexofLastPage)
    const indexofFirstPage= indexofLastPage - postPerPage;
    // console.log(indexofFirstPage)
    // const currentPage= data.slice(indexofFirstPage,indexofLastPage)
    return (
        <div>
            <ul>
                <li> <Link  to='1'> home </Link> </li>
                <li> <Link  to='2'> about </Link> </li>
                <li> <Link  to='3'> Card ({cart.length})</Link> </li>
                {/* <li> <Link  to='1'> home </Link> </li> */}
                
            </ul>
            {/* {
                data.length>1 &&  data.map((item,index)=>(
                    <h3 key={index}>{item.body}</h3>))
            } */}
              <h1>{data.title}</h1>
     
     <Pagination
     onChange={(value)=>setPage(value)}
     pageSize={postPerPage}
     total={total}
     current={page}
     
     />
            <Outlet context={[data,setData]}></Outlet>
        </div>
    );
};

export default Nested;