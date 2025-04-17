import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FlightDetails from './pages/FlightDetails.jsx';
import Hero from './sections/Hero.jsx';
import ReviewForm from './components/ReviewForm.jsx';
import CreateItinerary from './pages/Itinerary.jsx';
import PackingAssistant from './pages/PackingAssistant.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import SignInForm from './components/SignInForm.jsx';
import HotelSuggestions from './pages/HotelSuggestions.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/flightdetails",
    element: <FlightDetails/>,
  },
  {
    path: "/hero",
    element: <Hero/>,
  },
  {
    path: "/reviewform",
    element: <ReviewForm/>
  },
  {
    path: "/itinerary",
    element: <CreateItinerary/>
  },
  {
    path: "/packing-assistant",
    element: <PackingAssistant/>
  },
  {
    path: "/signup",
    element: <SignUpForm/>
  }, 
  {
    path: "/signin",
    element: <SignInForm/>
  },
  {
    path: "/hotel-suggestions",
    element: <HotelSuggestions/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


