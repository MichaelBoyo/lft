import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import UserDetails from "./pages/UserDetails";
import ComingSoon from "./pages/ComingSoon";
export const routes = [
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
