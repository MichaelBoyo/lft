import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
const App = () => {
  const aappRoutes = useRoutes(routes);
  return <div>{aappRoutes}</div>;
};

export default App;
