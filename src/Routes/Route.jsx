import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import GetAllIntern from "../Pages/GetAllIntern/GetAllIntern";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AdminHome from "../Pages/AdminDashboard/AdminHome/AdminHome";
// import UserHome from "../Pages/UserDashboard/UserHome/UserHome";
import UserProfile from "../Pages/UserDashboard/UserProfile/UserProfile";
import AddAnIntern from "../Pages/AdminDashboard/AddAnIntern/AddAnIntern";
import AddedInterns from "../Pages/AdminDashboard/AddedInterns/AddedInterns";
import AllApplicant from "../Pages/AdminDashboard/AllApplicant/AllApplicant";
import ManageInterns from "../Pages/AdminDashboard/ManageInterns/ManageInterns";
import SingleIntern from "../Pages/GetAllIntern/SingleIntern";
import HomeIntern from "../Pages/Home/HomeIntern/HomeIntern";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/getAllIntern",
        element: <GetAllIntern></GetAllIntern>,
        loader: () => fetch('http://localhost:5000/interns'),
      },
      {
        path: "/HomeIntern",
        element: <HomeIntern></HomeIntern>,
        loader: () => fetch('http://localhost:5000/internLimit'),
      },
      {
        path: "/Interns/:id",
        element: <PrivateRoute><SingleIntern></SingleIntern></PrivateRoute>,
        loader: async ({params})  => fetch(`http://localhost:5000/interns/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        {
            path: 'UserProfile',
            element: <UserProfile></UserProfile>
        },

        //Admin
        {
            path: 'adminhome',
            element: <AdminHome></AdminHome>
        },
        {
            path: 'AddAnIntern',
            element: <AddAnIntern></AddAnIntern>
        },
        {
            path: 'AddedInterns',
            element: <AddedInterns></AddedInterns>
        },
        {
            path: 'AllApplicant',
            element: <AllApplicant></AllApplicant>
        },
        {
            path: 'ManageInterns',
            element: <ManageInterns></ManageInterns>
        },
    ]
}
 
]);
