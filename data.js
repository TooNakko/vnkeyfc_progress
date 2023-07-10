/*
  hình ảnh: bỏ hình ảnh vào thư mục images, rồi nhúng như bên dưới
  
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
      "hinh_anh": "./images/AIR.webp",
      "ten": "AIR",
      "dich_thuat": 50,
      "bien_tap": 0,
      "ki_thuat": 90,
      "mi_thuat": 0,
      "trang_thai": 1
    },
    {
      "hinh_anh": "./images/Clannad_game_cover.jpg",
      "ten": "CLANNAD",
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
      "hinh_anh": "./images/Tomoyo.webp",
      "ten": "Tomoyo After",
      "dich_thuat": 100,
      "bien_tap": 0,
      "ki_thuat": 50,
      "mi_thuat": 20,
      "trang_thai": 2
    },
    {
      "hinh_anh": "./images/Rewrite.jpg",
      "ten": "Rewrite",
      "dich_thuat": 100,
      "bien_tap": 100,
      "ki_thuat": 100,
      "mi_thuat": 100,
      "trang_thai": 0
    },
    {
      "hinh_anh": "./images/Rewrite.jpg",
      "ten": "Rewrite+",
      "dich_thuat": 80,
      "bien_tap": 0,
      "ki_thuat": 90,
      "mi_thuat": 90,
      "trang_thai": 2
    },
    {
      "hinh_anh": "./images/Little_Busters.jpg",
      "ten": "Little Busters!",
      "dich_thuat": 0,
      "bien_tap": 0,
      "ki_thuat": 20,
      "mi_thuat": 0,
      "trang_thai": 1
    },
    {
      "hinh_anh": "./images/planetarian_snow_globe.png",
      "ten": "Planetarian Snow globe",
      "dich_thuat": 100,
      "bien_tap": 100,
      "ki_thuat": 100,
      "mi_thuat": 100,
      "trang_thai": 0
    },
    {
      "hinh_anh": "./images/Angel_Beats.jpg",
      "ten": "Angel Beats! 1st beat",
      "dich_thuat": 80,
      "bien_tap": 10,
      "ki_thuat": 80,
      "mi_thuat": 10,
      "trang_thai": 1
    },
    {
      "hinh_anh": "./images/Stella.png",
      "ten": "Stella of the end",
      "dich_thuat": 100,
      "bien_tap": 60,
      "ki_thuat": 90,
      "mi_thuat": 90,
      "trang_thai": 1
    },
    {
      "hinh_anh": "./images/Prima.jpg",
      "ten": "Prima Doll",
      "dich_thuat": 90,
      "bien_tap": 0,
      "ki_thuat": 20,
      "mi_thuat": 0,
      "trang_thai": 1
    }
]
