import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Checkout,
  Earphones,
  Headphones,
  Home,
  Layout,
  Product,
  Speakers,
} from "./pages";
import "./index.css";
import { productLoader } from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/headphones",
        element: <Headphones />,
      },
      {
        path: "/headphones/:name",
        element: <Product />,
        loader: productLoader,
      },
      {
        path: "/speakers",
        element: <Speakers />,
      },
      {
        path: "/speakers/:name",
        element: <Product />,
        loader: productLoader,
      },
      {
        path: "/earphones",
        element: <Earphones />,
      },
      {
        path: "/earphones/:name",
        element: <Product />,
        loader: productLoader,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
