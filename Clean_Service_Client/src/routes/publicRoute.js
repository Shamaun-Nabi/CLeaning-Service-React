import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";

export const publicRoute = [
  {
    path: "/",
    name: "home",
    Component: Home,
  },
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
  {
    path: "/contact",
    name: "contact",
    Component: Contact,
  },
  {
    path: "/login",
    name: "login",
    Component: Login,
  },
];
