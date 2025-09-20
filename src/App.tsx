import Navbar from "./components/Navbar"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from "./components/About";  
import Pages from "./components/Pages";
import Service from "./components/Service";
import BodySection from "./components/BodySection";
function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <div ><Navbar/><BodySection/></div>,
  },
  {
    path: "/about",
    element: <div><Navbar/><About/> </div>,
  },
  {
    path: "/pages",
    element:<div><Navbar/><Pages/></div>,
  },
  {
    path: "/service",
    element: <div><Navbar/><Service/></div>,
  },
]);
  return (
 <RouterProvider router={router} />
);

  
  
}

export default App