
import { useEffect, useState } from 'react';
import './App.css';
// import { Pagination } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Nested from './Nested';
import NestedOne from './NestedOne';
import NestedTwo from './NestedTwo';

function App() {



  return (
    <div className="App">
   <Routes>
      <Route path='/a' element={<Nested></Nested>}>
        <Route path='1' element={<NestedOne/>}></Route>
        <Route path='2' element={<NestedTwo/>}></Route>
      </Route>
   </Routes>
{/* 
     {
      currentPage.map((item,index)=>(
        <h3 key={index}>{item.body}</h3>
      ))
     }
     <Pagination
     onChange={(value)=>setPage(value)}
     pageSize={postPerPage}
     total={total}
     current={page}
     
     /> */}

     
    </div>
  );
}

export default App;
