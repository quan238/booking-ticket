import Axios from "axios";

export default class MovieService {
  fetchAll() {
    return Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      mimeType: "json",
    });
  }
}



