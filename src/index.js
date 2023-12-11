import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Hero from './components/Hero';
import { Provider } from 'react-redux';
import store from './utils/store';
import VideoPlayer from './components/VideoPlayer';
import MovieInfo from './components/MovieInfo';

const appLayout= createBrowserRouter([{
  path:"/",
  element: <App/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/",
      element:<Home/>,
      children:[
        {
          path:"/",
          element:<Hero/>,
        }
      ]
    },
    {
      path:"/watch/:id",
      element:<VideoPlayer/>
    },
    {
      path:"/info/:title/:id",
      element:<MovieInfo/>
    },
    {
      path:"/",
      element:<Home/>
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><RouterProvider router={appLayout}/></Provider>);


