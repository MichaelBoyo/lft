import { routes } from "./routes";
import { useRoutes } from "react-router-dom";

const App = () => {
  const appRoutes = useRoutes(routes);
  return appRoutes;
};

export default App;
