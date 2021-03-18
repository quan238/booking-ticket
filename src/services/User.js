import Axios from "axios";
export default class UserService {
  fetchUser() {
    return Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01  ",
      method: "GET",
      mimeType: "json",
    });
  }
}
