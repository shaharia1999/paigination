
import { useEffect, useState } from 'react';
import './App.css';
// import { Pagination } from 'antd';
<<<<<<< HEAD
import { Route, Routes, useNavigate } from 'react-router-dom';
import Nested from './Nested';
import NestedOne from './NestedOne';
import NestedTwo from './NestedTwo';
import Home from './Home';
import RoomPage from './RoomPage';

function App() {
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nested from './Nested';
import NestedOne from './NestedOne';
import NestedTwo from './NestedTwo';
import { QueryClient ,QueryClientProvider} from 'react-query';
// import { store } from './app/store'
import { Provider } from 'react-redux'
import { store } from './store';
import Card from './Card';

function App() {
  const queryClient = new QueryClient()

>>>>>>> 6c95ca5ce24732e890ed3fb04148f19e29ba8766

  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/room/:roomId' element={<RoomPage/>}></Route>
      <Route path='/a' element={<Nested></Nested>}>
        <Route path='1' element={<NestedOne/>}></Route>
        <Route path='2' element={<NestedTwo/>}></Route>
        <Route path='3' element={<Card/>}></Route>

      </Route>
   </Routes>
   </QueryClientProvider>
   </Provider>
   </BrowserRouter>
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
