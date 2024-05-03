import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './app/pages/RegisterPage';
import LoginPage from './app/pages/LoginPage';
import PostsPage from './app/pages/PostsPage';
import NotFoundPage from './app/pages/NotFoundPage';
import PostPage from './app/pages/PostPage';
import AddPostPage from './app/pages/AddPostPage';
import MyPostsPage from './app/pages/MyPostsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostsPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/posts',
    element: <PostsPage />
  },
  {
    path: '/posts/:postId',
    element: <PostPage />
  },
  {
    path: '/createPost',
    element: <AddPostPage />
  },
  {
    path: '/myPosts',
    element: <MyPostsPage />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
