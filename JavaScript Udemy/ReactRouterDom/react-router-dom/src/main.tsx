import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Menu } from './components/Menu';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Post } from './components/Posts';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Post />} />
        <Route path='/posts/:id' element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
