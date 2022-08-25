import './App.css';

import { Route, Routes, NavLink } from 'react-router-dom';

import Home from './Pages/Home';
import BlogLayout from './Pages/blog';
import Contact from './Pages/Contact';
import Categories from './Pages/blog/Categories';
import PostUrl from './Pages/blog/PostUrl';
import Blog from './Pages/blog/Blog';
import Page404 from './Pages/Page404';
import Blog404 from './Pages/blog/Blog404';
import Profile from './Pages/Profile';

import PrivateRoot from './components/PrivateRoot';

import AuthLayout from './Pages/auth/AuthLayout';
import Login from './Pages/auth/Login';

import HomeLayout from './Pages/HomeLayout';

function App() {
  return (
    <>


      <Routes>
        <Route path='/' element={<HomeLayout />} >
          <Route index={true} element={<Home />} />
          <Route path='contacts' element={<Contact />} />

          <Route path='blog' element={<BlogLayout />} >
            <Route index={true} element={<Blog />} />
            <Route path='categories' element={<Categories />} />
            <Route path='post/:url' element={<PostUrl />} />
            <Route path='*' element={<Blog404 />} />
          </Route>
        </Route>

        <Route path='/profile' element={<PrivateRoot><Profile /></PrivateRoot>} />


        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
        </Route>

        <Route path='*' element={<Page404 />} />

      </Routes>
    </>



  );
}

export default App;
