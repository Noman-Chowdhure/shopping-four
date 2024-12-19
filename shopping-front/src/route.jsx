import { createBrowserRouter } from "react-router-dom";
import LayOut from "./layOut/LayOut";
import Admin from "./admin/Admin";
import Landing from "./components/landingPAGE/Landing";
import Product from "./components/productPAGE/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children:[
      {path:'/',element:<Landing></Landing>},
      {path:'/product',element:<Product></Product>}
    ]
  },
  {
    path:'/admin',
    element:<Admin></Admin>
  }
]);
