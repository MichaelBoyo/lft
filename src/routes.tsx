import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import UserDetails from "./pages/UserDetails";
import ComingSoon from "./pages/ComingSoon";
import NotFound404 from "./pages/404-NotFOund";
export const routes = [
  {
    path: "/:path",
    element: <NotFound404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "users",
        children: [
          {
            path: "",
            element: <UserDashboard />,
          },
          {
            path: ":id",
            element: <UserDetails />,
          },
        ],
      },
      {
        path: ":route",
        element: <ComingSoon />,
      },
    ],
  },
];
