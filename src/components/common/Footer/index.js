import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('categories')}>
        <div>
          <a>tin tuc</a>
          <ul>
            <li>
              <a>Chính trị - Xã hội</a>
            </li>
            <li>
              <a>Tin TP Hồ Chí Minh</a>
            </li>
          </ul>
        </div>
        <div>
          <a>bong da</a>
          <ul>
            <li>
              <a>Ngoại hạng Anh</a>
            </li>
            <li>
              <a>Video</a>
            </li>
          </ul>
        </div>
        <div>
          <a>thoi trang</a>
          <ul>
            <li>
              <a>Bí quyết mặc đẹp</a>
            </li>
          </ul>
        </div>
        <div>
          <a>phap luat</a>
          <ul>
            <li>
              <a>Vụ án nổi tiếng</a>
            </li>
            <li>
              <a>Trọng án</a>
            </li>
          </ul>
        </div>
        <div>
          <a>Hi-tech</a>
          <ul>
            <a>Tin công nghệ</a>
          </ul>
        </div>
        <div>
          <a>Kinh doanh</a>
          <ul>
            <li>
              <a>Khởi nghiệp</a>
            </li>
            <li>
              <a>Tỷ giá</a>
            </li>
          </ul>
        </div>
        <div>
          <a>Suc khoe</a>
          <ul>
            <li>
              <a>Bệnh đàn ông</a>
            </li>
            <li>
              <a>Bệnh phụ nữ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('intro')}>
        <div className={cx('intro-container')}>
          <div>
            <a>Giới thiệu</a>
            <span>|</span>
            <a>Góp ý</a>
            <span>|</span>
            <a>Đầu trang</a>
            <span>|</span>
            <a>LIÊN HỆ QUẢNG CÁO</a>
          </div>
        </div>
      </div>
      <div className={cx('bottom_footer')}>
        <div>
          Cơ quan chủ quản: Công ty Cổ phần Quảng cáo Trực tuyến 24H Trụ sở:
          Tầng 12, Tòa nhà Geleximco, 36 Hoàng Cầu, Phường Ô Chợ Dừa, Quận Đống
          Đa, TP Hà Nội. Tel: (84-24) 73 00 24 24 hoặc (84-24) 3512 1806 - Fax:
          (84-24) 3512 1804. Chi nhánh: Tầng 7, Tòa nhà Việt Úc, 402 Nguyễn Thị
          Minh Khai, Phường 5, Quận 3, TP. Hồ Chí Minh. Tel: (84-28) 7300 2424 /
          Giấy phép số 332/GP – TT ĐT ngày cấp 22/01/2018 SỞ THÔNG TIN VÀ TRUYỀN
          THÔNG HÀ NỘI. Chịu trách nhiệm quản lý nội dung: Phan Minh Tâm.
          HOTLINE: 0965 08 24 24
        </div>
      </div>
    </div>
  );
}

export default Footer;
