import Axios from "axios";

class MovieService {
   fetchAll() {
    return  Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      mimeType: "json",
    });
  }
}

export default MovieService;
