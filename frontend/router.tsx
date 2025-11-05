import { createBrowserRouter } from "react-router";
import CreateProjectPage from "./pages/CreateProjectPage";
import App from "./components/App";
import Home from "./pages/Home";
import { CreateVolunteerPage } from "./pages/CreateVolunteerPage";
import FindVolunteerMatchesPage from "./pages/FindVolunteerMatchesPage";

export default function TechAssistPortalRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "create-project",
          element: <CreateProjectPage />
        },
        {
          path: "create-volunteer",
          element: <CreateVolunteerPage />
        },
        {
          path: "find-volunteer-matches",
          element: <FindVolunteerMatchesPage />
        }
      ]
    }
  ]);
}