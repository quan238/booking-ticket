import Axios from "axios";

class MovieService {
  fetchAll() {
    return Axios({
      url:
        "https://api.themoviedb.org/3/movie/popular?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1",
      method: "GET",
    });
  }
}

export default MovieService;
