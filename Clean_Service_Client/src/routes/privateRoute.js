import Services from "../Pages/Services";
import About from "../Pages/About";

export const privateRoute = [
  {
    path: "/about",
    name: "about",
    Component: About,
  },
  {
    path: "/services",
    name: "services",
    Component: Services,
  },
];
