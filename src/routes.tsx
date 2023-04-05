import {
  Login,
  UserDashboard,
  UserDetails,
  NotFound404,
  ComingSoon,
} from "./pages";

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
