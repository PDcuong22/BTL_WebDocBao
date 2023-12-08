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
          {/* <li>
            <div className={cx("category")}>
              <img src="https://cdn.24h.com.vn/images/2014/menu-top-xem-danh-muc.gif" />
              <a href="#">Danh mục</a>
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
                <a>Thời trang</a>
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
                <a>Khoa học</a>
                <ul className={cx("submenu2")}>
                  <li>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
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
                    <a href="#">Điểm đến</a>
                    <a href="#">Ẩm thực</a>
                    <a href="#">Dấu chân</a>
                    <a href="#">Tư vấn</a>
                    <a href="#">Cẩm nang</a>
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
          </li> */}
          <li>
            <div className={cx("category")}>
              <img src="https://icdn.24h.com.vn/upload/4-2018/images/2018-11-05/lamdep-1541404755-172-width10height20.png" />
              <a href="#">KHoa học</a>
            </div>
            <ul className={cx("submenu")}>
              <li>
                <a>Tin tức</a>
              </li>
              <li>
                <a>Phát minh</a>
              </li>
              <li>
                <a>Ứng dụng</a>
              </li>
              <li>
                <a>Khoa học trong nước</a>
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
                <a>Phim</a>
              </li>
              <li>
                <a>Âm nhạc</a>
              </li>
              <li>
                <a>Tin tức giải trí</a>
              </li>
              <li>
                <a>Giới sao</a>
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
                <a>Chứng khoán</a>
              </li>
              <li>
                <a>Doanh nghiệp</a>
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
                <a>Du lịch Châu Âu</a>
              </li>
              <li>
                <a>Du lịch Châu Á</a>
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
                <a>Món ngon mỗi ngày</a>
              </li>
              <li>
                <a>Thực đơn</a>
              </li>
              <li>
                <a>Tin tức ẩm thực</a>
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
                <a>Tin tức</a>
              </li>
              <li>
                <a>Dinh dưỡng</a>
              </li>
              <li>
                <a>Khỏe đẹp</a>
              </li>
              <li>
                <a>Các bệnh</a>
              </li>
              <li>
                <a>Vaccine</a>
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
                <a>Hồ sơ phá án</a>
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
                <a>Tin tức</a>
              </li>
              <li>
                <a>Tuyển sinh</a>
              </li>
              <li>
                <a>Diễn đàn</a>
              </li>
              <li>
                <a>Chân dung</a>
              </li>
              <li>
                <a>Giáo dục 4.0</a>
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
                <a>Tennis</a>
              </li>
              <li>
                <a>Người đẹp - Ngôi sao</a>
              </li>
              <li>
                <a>Bóng chuyền</a>
              </li>
              <li>
                <a>Thể thao Việt Nam</a>
              </li>
              <li>
                <a>Môn thể thao khác</a>
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
                <a>Chính sách</a>
              </li>
              <li>
                <a>Thị trường</a>
              </li>
              <li>
                <a>Không gian sống</a>
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
                <a>Tin tức ô tô</a>
              </li>
              <li>
                <a>Đánh giá xe</a>
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
                <a>Nhịp sống</a>
              </li>
              <li>
                <a>Tổ ấm</a>
              </li>
              <li>
                <a>Bài học sống</a>
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
                <a>Điểm nóng</a>
              </li>
              <li>
                <a>Thế giới động vật</a>
              </li>
              <li>
                <a>Theo dòng lịch sử</a>
              </li>
              <li>
                <a>Quân sự</a>
              </li>
              <li>
                <a>Cunng đình Trung Hoa</a>
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
                <a>Phần mềm</a>
              </li>
              <li>
                <a>Mạng xã hội</a>
              </li>
              <li>
                <a>Game</a>
              </li>
              <li>
                <a>Thủ thuật - Tiện ích</a>
              </li>
              <li>
                <a>Khám phá công nghệ</a>
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
                <a>Bóng đá trong nước</a>
              </li>
              <li>
                <a>Tin chuyển nhượng</a>
              </li>
              <li>
                <a>Ngoại Hạng Anh</a>
              </li>
              <li>
                <a>Laliga</a>
              </li>
              <li>
                <a>Serie A</a>
              </li>
              <li>
                <a>Bundesliga</a>
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