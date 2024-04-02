import "./App.css";
import React, { children } from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import NavBar from "./components/navigationBar/navBar";
import Overview from "./components/overview/overview";
import Favorites from "./components/favorites/favorites";
import Contacts from "./components/contactsList/contacts";
import store from "./redux/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

function App() 
{
  return (
    <div>
    <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </React.StrictMode>
    </div>
  )
}

export default App;