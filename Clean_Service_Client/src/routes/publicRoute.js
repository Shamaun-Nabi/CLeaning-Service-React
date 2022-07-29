import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";

export const publicRoute = [
  {
    path: "/",
    name: "home",
    Component: Home,
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
