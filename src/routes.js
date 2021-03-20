import DetailMovies from "./components/DetailMovies/DetailMovies";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";

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
  {
    path: "/details/movie/:id/payment",
    exact: true,
    component: Payment,
  },
];
export { routesHome };
