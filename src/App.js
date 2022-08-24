import './App.css';

import { Route, Routes, NavLink, Link } from 'react-router-dom';

import Home from './Pages/Home';
import BlogLayout from './Pages/blog';
import Contact from './Pages/Contact';
import Categories from './Pages/blog/Categories';
import PostUrl from './Pages/blog/PostUrl';
import Blog from './Pages/blog/Blog';
import Page404 from './Pages/Page404';

function App() {
  return (
    <>
      <nav>
        <NavLink to={'/'}>Home page</NavLink>
        <NavLink to={'/contacts'}>Contacts page</NavLink>
        <NavLink to={'/blog'}>Blog page</NavLink>

      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contact />} />

        <Route path='/blog' element={<BlogLayout />} >
          <Route index={true} element={<Blog />} />
          <Route path='categories' element={<Categories />} />
          <Route path='post/:url' element={<PostUrl />} />
        </Route>

        <Route path='*' element={<Page404 />} />

      </Routes>
    </>



  );
}

export default App;
