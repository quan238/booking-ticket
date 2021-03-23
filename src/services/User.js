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
  signIn(user) {
    return Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      // mimeType: "json",
      data:user,
    });
  }
}
