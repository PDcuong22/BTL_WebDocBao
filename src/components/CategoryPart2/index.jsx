import classNames from "classnames/bind";
import styles from "./CategoryPart2.module.scss";

const cx = classNames.bind(styles);

function CategoryPart2() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-item")}>Giáo dục du học</div>
        <div className={cx("header-item2")}>Dạy con</div>
        <div className={cx("header-item2")}>Trắc nghiệm</div>
        <div className={cx("header-item2")}>Tuyển sinh ĐH - CĐ</div>
        <div className={cx("header-item2")}>Tuyển sinh lớp 10</div>
      </div>
      <p className={cx("tittle")}>
      Vụ trưởng Vụ Giáo dục Đại học: Đừng dồn tất cả nguyện vọng vào các trường top cao
      </p>
      <div className={cx("news")}>
        <img src="https://icdn.24h.com.vn/upload/3-2023/images/2023-07-21//medium/adt1689907972-k2-373.jpg" 
        width="120"
        height="90"
        />
        <p className={cx("content")}>
        “Để phòng chống rủi ro, thí sinh nên đặt một số nguyện vọng và san đều ở những nhóm trường có mức độ cạnh tranh khác nhau, đừng dồn tất cả nguyện vọng vào các trường top cao”- PGS.TS Nguyễn Thu Thủy,...
        </p>
      </div>
      <div className={cx("news1")}>
        <div className={cx("item")}>
          <a>Ngành 'hot' điểm chuẩn dự kiến không dưới 27 điểm</a>
        </div>
        <div className={cx("item")}>
          <a>34 tuổi thi đại học 15 lần, người đàn ông đã chịu nhập học</a>
        </div>
        <div className={cx("item")}>
          <a>Điểm chuẩn Trường ĐH Kinh tế Quốc dân dự kiến như thế nào?</a>
        </div>
        <div className={cx("item")}>
          <a>Được hỗ trợ 100% học phí, học sinh Đà Nẵng tiết kiệm được bao nhiêu mỗi tháng?</a>
        </div>
      </div>
    </div>
  );
}

export default CategoryPart2;