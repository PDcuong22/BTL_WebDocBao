import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <nav>
        <h1 className={cx("logo")}>
          <img
            src="https://icdn.24h.com.vn/images/2014/24h_logo_trang_chu_2015.png"
            alt=""
          />
        </h1>
        <ul className={cx("menu")}>
          <li>
            <div className={cx("category")}>
              <img src="https://cdn.24h.com.vn/images/2014/menu-top-xem-danh-muc.gif" />
              <a href="#">Danh muc</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a>Trang chủ 24h</a>
              </li>
              <li>
                <a>Tin tức trong ngày</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Chính trị xã hội</a>
                    <a href="#">Đời sống- dân sinh</a>
                    <a href="#">Giao thông -đô thị</a>
                    <a href="#">Nóng trên mạng</a>
                    <a href="#">Dự báo thời tiết</a>
                    <a href="#">Lịch vạn niên</a>
                    <a href="#">Tin tức Hà Nội</a>
                    <a href="#">Vacxin covid 19</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Bóng đá</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">lịch thi đấu bóng đá</a>
                    <a href="#">lịch thi đấu bóng đá hôm nay</a>
                    <a href="#">Video highlight</a>
                    <a href="#">Bảng xếp hạng </a>
                    <a href="#">Tường thuật trực tiếp</a>
                    <a href="#">Bóng đá Ngoại Hạng Anh</a>
                    <a href="#">Bóng đá Đức- Bundesliga</a>
                    <a href="#">Video bàn thắng</a>
                    <a href="#">Livescore</a>
                    <a href="#">FA cup</a>
                    <a href="#">Kết quả bóng đá</a>
                    <a href="#">Clip 1 phút bóng đá</a>
                    <a href="#">Bóng đá Pháp -ligue1</a>
                    <a href="#">Xem video highlight trên 24h.com.vn</a>
                    <a href="#">AFF cup 2022</a>
                    <a href="#">Bóng đá Việt Nam</a>
                    <a href="#">Tin vắn bóng đá</a>
                    <a href="#">Lịch bóng đá TV</a>
                    <a href="#">Bóng đá Ý</a>
                    <a href="#">Bóng đá Tây Ban Nha</a>
                    <a href="#">Top ghi bàn</a>
                    <a href="#">Cup C1 championleague</a>
                    <a href="#">Các giải bóng đá khác</a>
                    <a href="#">Tin bên lề bóng đá</a>
                    <a href="#">Video highlight NHA</a>
                    <a href="#">Tin chuyển Nhượng</a>
                    <a href="#">Ảnh bóng đá- người đẹp</a>
                    <a href="#">Ngôi sao bóng đá</a>
                    <a href="#">Video bóng đá hot</a>
                    <a href="#">Top 10+</a>
                    <a href="#">Xếp hạng FIFA</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Thế giới</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Điểm nóng</a>
                    <a href="#">Quân sự</a>
                    <a href="#">Thế giới động vật</a>
                    <a href="#">Theo dòng lích sử</a>
                    <a href="#">Cung đình Trung Hoa</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Thời trang</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Thời trang công sở</a>
                    <a href="#">Quân sự</a>
                    <a href="#">Thế giới động vật</a>
                    <a href="#">Theo dòng lích sử</a>
                    <a href="#">Cung đình Trung Hoa</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Pháp luật</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Vụ án nổi tiếng</a>
                    <a href="#">Trọng án</a>
                    <a href="#">Kỳ án thế giới</a>
                    <a href="#">Trật tự xã hội</a>
                    <a href="#">Cảnh giác</a>
                    <a href="#">Hồ sơ vụ án</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Thời trang Hi-tech</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Điện thoại</a>
                    <a href="#">Đánh giá</a>
                    <a href="#">Laptop</a>
                    <a href="#">Tin công nghệ</a>
                    <a href="#">Điện tử gia dụng</a>
                    <a href="#">Máy tính bảng</a>
                    <a href="#">Bảng giá</a>
                    <a href="#">Iphone14</a>
                    <a href="#">Máy ảnh và camera số</a>
                    <a href="#">Phụ kiện Hi-tech</a>
                    <a href="#">Tra cứu sản phẩm công nghệ</a>
                    <a href="#">Máy tính để bàn</a>
                    <a href="#">Thế giới công nghệ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Kinh doanh</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Doanh nhân</a>
                    <a href="#">Tài chính</a>
                    <a href="#">Bất động sản</a>
                    <a href="#">Khởi nghiệp</a>
                    <a href="#">Doanh nghiệp</a>
                    <a href="#">Ngân hàng</a>
                    <a href="#">Chứng khoán</a>
                    <a href="#">Tỉ giá ngoại tệ</a>
                    <a href="#">Giá vàng hôm nay</a>
                    <a href="#">Tiền Tiền Tiền</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Clip 1 phút bóng đá</a>
              </li>
              <li>
                <a>Ẩm thực</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Món ngon mỗi ngày</a>
                    <a href="#">Thực đơn hàng ngày</a>
                    <a href="#">Clip ẩm thực</a>
                    <a href="#">Tin tức ẩm thực</a>
                    <a href="#">Tra cứu ẩm thực</a>
                    <a href="#">Khéo tay</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Đàn ông</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Đàn ông khỏe đẹp</a>
                    <a href="#">Đàn ông sành điệu</a>
                    <a href="#">Đàn ông phải thế</a>
                    <a href="#">Đàn ông 8</a>
                    <a href="#">Sành-Ăn-Chơi</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Làm đẹp</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Thẩm mỹ viện</a>
                    <a href="#">Tư vấn làm đẹp</a>
                    <a href="#">Làm đẹp cùng sao</a>
                    <a href="#">Phong cách làm đẹp</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Đời sống showbiz</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Sao Việt</a>
                    <a href="#">24h gặp gỡ</a>
                    <a href="#">Talk với sao</a>
                    <a href="#">Sao chấu Á</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Giải trí</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Phim</a>
                    <a href="#">Nhạc</a>
                    <a href="#">TV show</a>
                    <a href="#">Tin tức giải trí</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Bạn trẻ-Cuộc sống</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Chuyện công sở</a>
                    <a href="#">Tình yêu -Giới tính</a>
                    <a href="#">Ngoại tình</a>
                    <a href="#">Giới trẻ</a>
                    <a href="#">Hotgirl-Hot boy</a>
                    <a href="#">Nhịp sống trẻ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Giáo dục- du học</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Tuyển sinh ĐH-CĐ</a>
                    <a href="#">Dạy con</a>
                    <a href="#">Tin tức giáo dục</a>
                    <a href="#">tuyển sinh lớp 10</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Trắc nghiệm</a>
              </li>
              <li>
                <a>Thể thao</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Tennis</a>
                    <a href="#">Võ thuật -UFC-Quyền Anh</a>
                    <a href="#">Lịch thi đấu thể thao</a>
                    <a href="#">Người đẹp- ngôi sao</a>
                    <a href="#">Bóng chuyền</a>
                    <a href="#">Bảng xếp hạng tennis</a>
                    <a href="#">Lịch thi đấu tennis</a>
                    <a href="#">Video tennis</a>
                    <a href="#">Tin bên lề thể thao</a>
                    <a href="#">Bảng xếp hạng Thể thao</a>
                    <a href="#">Clip đặc sắc</a>
                    <a href="#">Billard-snooker</a>
                    <a href="#">Thể thao Việt Nam</a>
                    <a href="#">Ảnh thể thao</a>
                    <a href="#">Golf</a>
                    <a href="#">Đua xe thể thao F1</a>
                    <a href="#">Môn thể thao khác</a>
                    <a href="#">Bóng rổ NBA-VBA</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Phi thường kỳ quặc</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Hiếm có khó tìm</a>
                    <a href="#">Video clip chuyện là</a>
                    <a href="#">Bí hiểm</a>
                    <a href="#">Chuyện lạ quanh ta</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Công nghệ thông tin</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Game</a>
                    <a href="#">Phần mềm</a>
                    <a href="#">Khoa học</a>
                    <a href="#">Mạng xã hội</a>
                    <a href="#">Thủ thuật- Tiện Ích</a>
                    <a href="#">Sợ virus???</a>
                    <a href="#">Máy tin phụ kiện</a>
                    <a href="#">Khám phá công nghệ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Ô tô</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Tin tức ô tô</a>
                    <a href="#">Bảng giá xe ô tô</a>
                    <a href="#">Tư vấn</a>
                    <a href="#">Ngắm xe</a>
                    <a href="#">Đánh giá xe</a>
                    <a href="#">Clip giao thông</a>
                    <a href="#">Tra cứu ô tô</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Xe máy - xe đạp</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Thế giới xe</a>
                    <a href="#">Bảng giá xe</a>
                    <a href="#">Xe tay ga</a>
                    <a href="#">Xe phân khối lớn</a>
                    <a href="#">Xe máy điện</a>
                    <a href="#">Xe độc lạ</a>
                    <a href="#">Tra cứu xe máy</a>
                    <a href="#">Đánh giá</a>
                    <a href="#">Clip</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Thị trường- tiêu dùng</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Thị trường 24h</a>
                    <a href="#">Giá cả hàng hóa</a>
                    <a href="#">Xu hướng tiêu dùng độc lạ</a>
                    <a href="#">Sản xuất- tiêu dùng</a>
                    <a href="#">Trung tâm mua sắm</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Du lịch</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Du lịch Việt Nam</a>
                    <a href="#">Du lịch Trung Quốc</a>
                    <a href="#">Du lịch Châu âu</a>
                    <a href="#">Du lịch Châu á</a>
                    <a href="#">Tin tức du lịch</a>
                    <a href="#">Tra cứu địa điểm du lịch</a>
                    <a href="#">Ảnh</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Sức khỏe đời sống</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Bệnh đàn ông</a>
                    <a href="#">Bệnh phụ nữ</a>
                    <a href="#">Sức khỏe dinh dưỡng</a>
                    <a href="#">Sức khỏe tình dục</a>
                    <a href="#">Phát minh y học</a>
                    <a href="#">Tin tức sức khỏe</a>
                    <a href="#">Vacxin covid 19</a>
                    <a href="#">Ưng thư</a>
                    <a href="#">Tra cứu các loại bệnh</a>
                    <a href="#">Số liệu Covid 19</a>
                    <a href="#">Bài thuốc dân gian</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Cười 24h</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Clip hài hước</a>
                    <a href="#">Tranh vui</a>
                    <a href="#">Tiểu phẩm hài</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Media</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Intrographics</a>
                    <a href="#">Video</a>
                    <a href="#">Magazine</a>
                    <a href="#">Quiz</a>
                    <a href="#">Podcast</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Video tổng hợp</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#">Clip nóng</a>
                    <a href="#">Video tin tức</a>
                    <a href="#">Video bóng đá- thể thao</a>
                    <a href="#">Video thời trang</a>
                    <a href="#">Video giải trí</a>
                    <a href="#">Clip hài hước</a>
                    <a href="#">Video an ninh xã hội</a>
                    <a href="#">Video ẩm thức- du lịch</a>
                    <a href="#">Video thời trang hi-tech</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Tin tức phụ nữ</a>
              </li>
              <li>
                <a>Hợp tác tài trợ</a>
              </li>
              <li>
                <a>Video tổng hợp</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/tintuc-1541404755-851-width20height18.png" />
              <a href="#">Tin tuc</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a>Chính trị -xã hội</a>
              </li>
              <li>
                <a>Đời sống dân sinh</a>
              </li>
              <li>
                <a>Giao thông đô thị</a>
              </li>
              <li>
                <a>Nóng trên mạng</a>
              </li>
              <li>
                <a>Dự báo thời tiết</a>
              </li>
              <li>
                <a>Lịch Vạn Niên</a>
              </li>
              <li>
                <a>Tin Hà Nội</a>
              </li>
              <li>
                <a>Vacxin covid 19</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/thegioi-1541404755-943-width20height20.png" />
              <a href="#">Bóng đá</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a>lịch thi đấu bóng đá</a>
              </li>
              <li>
                <a>lịch thi đấu bóng đá hôm nay</a>
              </li>
              <li>
                <a>Video highlight</a>
              </li>
              <li>
                <a>Bảng xếp hạng </a>
              </li>
              <li>
                <a>Tường thuật trực tiếp</a>
              </li>
              <li>
                <a>Bóng đá Ngoại Hạng Anh</a>
              </li>
              <li>
                <a>Bóng đá Đức- Bundesliga</a>
              </li>
              <li>
                <a>Video bàn thắng</a>
              </li>
              <li>
                <a>Sự kiên- Bình luận</a>
              </li>
              <li>
                <a>Livescore</a>
              </li>
              <li>
                <a>FA cup</a>
              </li>
              <li>
                <a>Kết quả bóng đá</a>
              </li>
              <li>
                <a>Clip 1 phút bóng đá</a>
              </li>
              <li>
                <a>Bóng đá Pháp -ligue1</a>
              </li>
              <li>
                <a>Xem video highlight trên 24h.com.vn</a>
              </li>
              <li>
                <a>AFF cup 2022</a>
              </li>
              <li>
                <a>Bóng đá Việt Nam</a>
              </li>
              <li>
                <a>Tin vắn bóng đá</a>
              </li>
              <li>
                <a>Lịch bóng đá TV</a>
              </li>
              <li>
                <a>Bóng đá Ý</a>
              </li>
              <li>
                <a>Bóng đá Tây Ban Nha</a>
              </li>
              <li>
                <a>Top ghi bàn</a>
              </li>
              <li>
                <a>Cup C1 championleague</a>
              </li>
              <li>
                <a>Các giải bóng đá khác</a>
              </li>
              <li>
                <a>Tin bên lề bóng đá</a>
              </li>
              <li>
                <a>Video highlight NHA</a>
              </li>
              <li>
                <a>Tin chuyển Nhượng</a>
              </li>
              <li>
                <a>Ảnh bóng đá- người đẹp</a>
              </li>
              <li>
                <a>Ngôi sao bóng đá</a>
              </li>
              <li>
                <a>Video bóng đá hot</a>
              </li>
              <li>
                <a>Top 10+</a>
              </li>
              <li>
                <a>Xếp hạng FIFA</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/lamdep-1541404755-172-width10height20.png" />
              <a href="#">Làm đẹp</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a>Thẩm mỹ viện</a>
              </li>
              <li>
                <a>Tư vấn làm đẹp</a>
              </li>
              <li>
                <a>Làm đẹp cùng sao</a>
              </li>
              <li>
                <a>Phong cách làm đẹp</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/showbiz-1541404755-320-width20height20.png" />
              <a href="#">Showbiz</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a>Sao Việt</a>
              </li>
              <li>
                <a>24h Làm Đẹp</a>
              </li>
              <li>
                <a>Talk Với Sao</a>
              </li>
              <li>
                <a>Sao Châu Á</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/taichinh-1541404755-784-width19height19.png" />
              <a href="#">Kinh doanh</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a>Doanh nhân</a>
              </li>
              <li>
                <a>Tài chính</a>
              </li>
              <li>
                <a>Bất động sản</a>
              </li>
              <li>
                <a>Khởi nghiệp</a>
              </li>
              <li>
                <a>Doanh nghiệp</a>
              </li>
              <li>
                <a>Ngân hàng</a>
              </li>
              <li>
                <a>Chứng khoán</a>
              </li>
              <li>
                <a>Tỉ giá ngoại tệ</a>
              </li>
              <li>
                <a>Giá vàng hôm nay</a>
              </li>
              <li>
                <a>Tiền Tiền Tiền</a>
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
                <a>Du lịch Việt Nam</a>
              </li>
              <li>
                <a>Du lịch Trung Quốc</a>
              </li>
              <li>
                <a>Du lịch Châu âu</a>
              </li>
              <li>
                <a>Du lịch Châu á</a>
              </li>
              <li>
                <a>Tin tức du lịch</a>
              </li>
              <li>
                <a>Tra cứu địa điểm du lịch</a>
              </li>
              <li>
                <a>Ảnh</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="	https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/amthuc-1541404755-635-width19height19.png" />
              <a href="#">Ẩm thực</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a>Món ngon mỗi ngày</a>
              </li>
              <li>
                <a>Thực đơn hàng ngày</a>
              </li>
              <li>
                <a>Clip ẩm thực</a>
              </li>
              <li>
                <a>Tin tức ẩm thực</a>
              </li>
              <li>
                <a>Tra cứu ẩm thực</a>
              </li>
              <li>
                <a>Khéo tay</a>
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
                <a>Bệnh đàn ông</a>
              </li>
              <li>
                <a>Bệnh phụ nữ</a>
              </li>
              <li>
                <a>Sức khỏe dinh dưỡng</a>
              </li>
              <li>
                <a>Sức khỏe tình dục</a>
              </li>
              <li>
                <a>Phát minh y học</a>
              </li>
              <li>
                <a>Tin tức sức khỏe</a>
              </li>
              <li>
                <a>Vacxin covid 19</a>
              </li>
              <li>
                <a>Ưng thư</a>
              </li>
              <li>
                <a>Tra cứu các loại bệnh</a>
              </li>
              <li>
                <a>Số liệu Covid 19</a>
              </li>
              <li>
                <a>Bài thuốc dân gian</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/eva-1541404755-220-width16height20.png" />
              <a href="#">Phái đẹp</a>
            </div>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2022/images/2022-12-15/icon-header-1671068809-987-width20height20.png" />
              <a href="#">Đàn ông</a>
            </div>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/1-2020/images/2020-02-10/icons8-fiat-500-96-1581317289-765-width24height15.png" />
              <a href="#">Ô tô</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a>Tin tức ô tô</a>
              </li>
              <li>
                <a>Bảng giá xe ô tô</a>
              </li>
              <li>
                <a>Tư vấn</a>
              </li>
              <li>
                <a>Ngắm xe</a>
              </li>
              <li>
                <a>Đánh giá xe</a>
              </li>
              <li>
                <a>Clip giao thông</a>
              </li>
              <li>
                <a>Tra cứu ô tô</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/3-2019/images/2019-08-19/nha_icon-20x20px--1566203736-124-width23height23.png" />
              <a href="#">Ngoại hạng Anh</a>
            </div>
          </li>
          {/* <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/2-2022/images/2022-05-20/th----thao-1653012495-777-width20height22.png" />
              <a href="#">Thể thao</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a>Tennis</a>
              </li>
              <li>
                <a>Võ thuật -UFC-Quyền Anh</a>
              </li>
              <li>
                <a>Lịch thi đấu thể thao</a>
              </li>
              <li>
                <a>Người đẹp- ngôi sao</a>
              </li>
              <li>
                <a>Bóng chuyền</a>
              </li>
              <li>
                <a>Bảng xếp hạng tennis</a>
              </li>
              <li>
                <a>Video tennis</a>
              </li>
              <li>
                <a>Tin bên lề thể thao</a>
              </li>
              <li>
                <a>Bảng xếp hạng Thể thao</a>
              </li>
              <li>
                <a>Clip đặc sắc</a>
              </li>
              <li>
                <a>Billard-snooker</a>
              </li>
              <li>
                <a>Thể thao Việt Nam</a>
              </li>
              <li>
                <a>Ảnh thể thao</a>
              </li>
              <li>
                <a>Golf</a>
              </li>
              <li>
                <a>Đua xe thể thao F1</a>
              </li>
              <li>
                <a>Môn thể thao khác</a>
              </li>
              <li>
                <a>Bóng rổ NBA-VBA</a>
              </li>
            </ul>
          </li>
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/1-2023/images/2023-01-30/phithuong-1675063724-137-width20height20.png" />
              <a href="#">Chuyện lạ</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a>Hiếm có khó tìm</a>
              </li>
              <li>
                <a>Video clip chuyện là</a>
              </li>
              <li>
                <a>Bí hiểm</a>
              </li>
              <li>
                <a>Chuyện lạ quanh ta</a>
              </li>
            </ul>
          </li> */}
        </ul>
        <h1 className={cx("search_icon")}></h1>
      </nav>
    </div>
  );
}

export default Header;