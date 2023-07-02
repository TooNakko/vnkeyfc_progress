/*
  hình ảnh: bỏ hình ảnh vào thư mục /src/images/, rồi nhúng như bên dưới
  
  các field chi_tiet là thông tin frame đã hoàn thành trong tiến độ dịch thuật, không có cũng đc

  trạng thái: 
  - 0: Đã hoàn thành
  - 1: Đang thực hiện
  - 2: Tạm dừng
  - 3: Hoãn vô thời hạn
  - số khác: chưa thực hiện
*/
var data = [
    {
      "hinh_anh": "/src/images/Clannad_game_cover.jpg",
      "ten": "Clannad",
      "dich_thuat": 100,
      "dich_thuat_chi_tiet": "227055/227055",
      "bien_tap": 100,
      "bien_tap_chi_tiet": "227055/227055",
      "ki_thuat": 100,
      "ki_thuat_chi_tiet": null,
      "mi_thuat": 100,
      "mi_thuat_chi_tiet": null,
      "trang_thai": 0
    },
    {
      "hinh_anh": "/src/images/hetcuu.webp",
      "ten": "Rewrite",
      "dich_thuat": 50,
      "bien_tap": 70,
      "ki_thuat": 90,
      "mi_thuat": 0,
      "trang_thai": 1
    }
]