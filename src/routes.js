import DetailMovies from "./components/DetailMovies/DetailMovies";
import Home from "./components/Home/Home";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  // {
  //     path: "/login",
  //     exact: true,
  //     component: UserLogin
  // },
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
