import DetailMovies from "./components/DetailMovies/DetailMovies";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  // {
  //     path: "/profile",
  //     exact: true,
  //     component: UserProfile
  // },
  {
    path: "/details/movie/:id",
    exact: true,
    component: DetailMovies,
  },
];
export { routesHome };
