import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <nav>
        <h1 className={cx("logo")}>
          <a href="/">
            <img
              src="https://icdn.24h.com.vn/images/2014/24h_logo_trang_chu_2015.png"
              alt=""
            />
          </a>
        </h1>
        <ul className={cx("menu")}>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/lamdep-1541404755-172-width10height20.png" />
              <a href="#">KHoa học</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64bb9f3cf3d0c05481f80a31">Tin tức</a>
              </li>
              <li>
                <a href="/subCategory/64bb9f42f3d0c05481f80a34">Phát minh</a>
              </li>
              <li>
                <a href="/subCategory/64bb9f4af3d0c05481f80a37">Ứng dụng</a>
              </li>
              <li>
                <a href="/subCategory/64bb9f2ef3d0c05481f80a2e">
                  Khoa học trong nước
                </a>
              </li>
              <li>
                <a href="/subCategory/64bb9ffcf3d0c05481f80a3d">
                  Thường thưởng
                </a>
              </li>
              <li>
                <a href="/subCategory/64bb9f5df3d0c05481f80a3a">
                  Thế giới tự nhiên
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/showbiz-1541404755-320-width20height20.png" />
              <a href="#">Giải trí</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64bba0abf3d0c05481f80a48">Phim</a>
              </li>
              <li>
                <a href="/subCategory/64bba0c0f3d0c05481f80a4b">Âm nhạc</a>
              </li>
              <li>
                <a href="/subCategory/64c545881ebddab5ecdac5c5">
                  Tin tức giải trí
                </a>
              </li>
              <li>
                <a href="/subCategory/64bba083f3d0c05481f80a42">Giới sao</a>
              </li>
              <li>
                <a href="/subCategory/64bba0fdf3d0c05481f80a4e">Sân khấu</a>
              </li>
              <li>
                <a href="/subCategory/64bba105f3d0c05481f80a51">Mĩ thuật</a>
              </li>
              <li>
                <a href="/subCategory/64c547941ebddab5ecdac5d4">TV Show</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/icons8-increase-96-copy-1541383138-358-width19height19.png" />
              <a href="#">Kinh doanh</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64bb9e42f3d0c05481f80a14">Chứng khoán</a>
              </li>
              <li>
                <a href="/subCategory/64bb9e3bf3d0c05481f80a11">Doanh nghiệp</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/dulich-1541404755-578-width20height20.png" />
              <a href="#">Du lịch</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64ccfc93a74720bc2319a0a3">
                  Du lịch Việt Nam
                </a>
              </li>
              <li>
                <a href="/subCategory/64ccfca2a74720bc2319a0a6">
                  Du lịch Trung Quốc
                </a>
              </li>
              <li>
                <a href="/subCategory/64ccfcaba74720bc2319a0a9">
                  Du lịch Châu Âu
                </a>
              </li>
              <li>
                <a href="/subCategory/64ccfcb0a74720bc2319a0ac">
                  Du lịch Châu Á
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/amthuc-1541404755-635-width19height19.png" />
              <a href="#">Ẩm thực</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64bba31cf3d0c05481f80aa1">
                  Thực đơn mỗi ngày
                </a>
              </li>
              <li>
                <a href="/subCategory/64bba315f3d0c05481f80a9e">
                  Món ngon mỗi ngày
                </a>
              </li>
              <li>
                <a href="/subCategory/64c396bc1d8357c808245066">Thực đơn</a>
              </li>
              <li>
                <a href="/subCategory/64ccfcb0a74720bc2319a0ac">
                  Tin tức ẩm thực
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/suckhoe-1541404755-232-width20height18.png" />
              <a href="#">Sức khỏe</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64bba147f3d0c05481f80a55">Tin tức</a>
              </li>
              <li>
                <a href="/subCategory/64bba160f3d0c05481f80a5b">Dinh dưỡng</a>
              </li>
              <li>
                <a href="/subCategory/64bba16cf3d0c05481f80a5e">Khỏe đẹp</a>
              </li>
              <li>
                <a href="/subCategory/64bba17ff3d0c05481f80a64">Các bệnh</a>
              </li>
              <li>
                <a href="/subCategory/64bba18cf3d0c05481f80a67">Vaccine</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/phapluat-1541404695-794-width20height18.png" />
              <a href="#">Pháp luật</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64bba1ecf3d0c05481f80a6c">Hồ sơ phá án</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/giaoduc-1541403678-183-width20height18.png" />
              <a href="#">Giáo dục</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64bba231f3d0c05481f80a75">Tin tức</a>
              </li>
              <li>
                <a href="/subCategory/64bba237f3d0c05481f80a78">Tuyển sinh</a>
              </li>
              <li>
                <a href="/subCategory/64bba245f3d0c05481f80a7b">Diễn đàn</a>
              </li>
              <li>
                <a href="/subCategory/64bba24bf3d0c05481f80a7e">Chân dung</a>
              </li>
              <li>
                <a href="/subCategory/64bba265f3d0c05481f80a84">Giáo dục 4.0</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/thethao-1541404619-794-width20height22.png" />
              <a href="#">Thể thao</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64c395de1d8357c808245055">Tennis</a>
              </li>
              <li>
                <a href="/subCategory/64c396161d8357c808245058">
                  Người đẹp - Ngôi sao
                </a>
              </li>
              <li>
                <a href="/subCategory/64c396361d8357c80824505b">Bóng chuyền</a>
              </li>
              <li>
                <a href="/subCategory/64c396481d8357c80824505e">
                  Thể thao Việt Nam
                </a>
              </li>
              <li>
                <a href="/subCategory/64c3965f1d8357c808245061">
                  Môn thể thao khác
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/thitruong-1541409252-196-width20height18.png" />
              <a href="#">Bất động sản</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64c8db7d3c5334ecc57c6033">Chính sách</a>
              </li>
              <li>
                <a href="/subCategory/64c9322480b0ef3155bbcaef">Thị trường</a>
              </li>
              <li>
                <a href="/subCategory/64c9342480b0ef3155bbcb01">
                  Không gian sống
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/1-2020/images/2020-02-10/icons8-fiat-500-96-1581317289-765-width24height15.png" />
              <a href="#">Ô tô</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64c3972d1d8357c808245070">Tin tức ô tô</a>
              </li>
              <li>
                <a href="/subCategory/64c3973b1d8357c808245073">Đánh giá xe</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/bantre-1541392580-852-width20height20.png" />
              <a href="#">Đời sống</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64c382d72833a8bce95440f7">Nhịp sống</a>
              </li>
              <li>
                <a href="/subCategory/64c382ed2833a8bce95440fa">Tổ ấm</a>
              </li>
              <li>
                <a href="/subCategory/64c383192833a8bce95440ff">Bài học sống</a>
              </li>
              <li>
                <a href="/subCategory/64c383272833a8bce9544102">Tiêu dùng</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/thegioi-1541404755-943-width20height20.png" />
              <a href="#">Thế giới</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64c27c4ffb9f67eee8ec54b9">Điểm nóng</a>
              </li>
              <li>
                <a href="/subCategory/64c27c97fb9f67eee8ec54be">
                  Thế giới động vật
                </a>
              </li>
              <li>
                <a href="/subCategory/64c54fe91ebddab5ecdac613">
                  Theo dòng lịch sử
                </a>
              </li>
              <li>
                <a href="/subCategory/64c5510d1ebddab5ecdac622">Quân sự</a>
              </li>
              <li>
                <a href="/subCategory/64c5528e1ebddab5ecdac635">
                  Cunng đình Trung Hoa
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/congnghe-1541403477-622-width19height18.png" />
              <a href="#">Công nghệ thông tin</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64c53c8b1ebddab5ecdac55b">Phần mềm</a>
              </li>
              <li>
                <a href="/subCategory/64c53dc51ebddab5ecdac56a">Mạng xã hội</a>
              </li>
              <li>
                <a href="/subCategory/64c53eeb1ebddab5ecdac579">Game</a>
              </li>
              <li>
                <a href="/subCategory/64c540011ebddab5ecdac58d">
                  Thủ thuật - Tiện ích
                </a>
              </li>
              <li>
                <a href="/subCategory/64c541241ebddab5ecdac59c">
                  Khám phá công nghệ
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/bongda-1541403477-523-width20height20.png" />
              <a href="#">Bóng đá</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a href="/subCategory/64c53a8e1ebddab5ecdac548">
                  Bóng đá Việt Nam
                </a>
              </li>
              <li>
                <a href="/subCategory/64bba3cef3d0c05481f80abd">
                  Tin chuyển nhượng
                </a>
              </li>
              <li>
                <a href="/subCategory/64a7b17b645f8748283f73c2">
                  Ngoại Hạng Anh
                </a>
              </li>
              <li>
                <a href="/subCategory/64a7e525873d78e633d39619">Laliga</a>
              </li>
              <li>
                <a href="/subCategory/64b547ef298d592b3e0360bf">Serie A</a>
              </li>

              <li>
                <a href="/subCategory/64c535d11ebddab5ecdac524">
                  Tin bên lề bóng đá
                </a>
              </li>
              <li>
                <a href="/subCategory/64c534021ebddab5ecdac517">
                  Ngôi sao bóng đá
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h1 className={cx("search_icon")}></h1>
      </nav>
    </div>
  );
}

export default Header;
