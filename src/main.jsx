import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Statistics from "./Component/Statistics/Statistics";
import AppliedJobs from "./Component/AppliedJobs/AppliedJobs";
import Blog from "./Component/Blog/Blog";
import JobList from "./Component/JobList/JobList";
import JobDetails from "./Component/JobDetails/JobDetails";
import ErrorPage from "./Component/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/availableJob.json"),
      },
      {
        path: "/",
        element: <JobList />,
      },
      {
        path: "jobDetails/:id",
        element: <JobDetails />,
      },

      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
