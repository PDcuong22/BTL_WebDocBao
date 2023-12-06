import classNames from "classnames/bind";
import styles from "./CategoryPart2.module.scss";
import SquareIcon from "@mui/icons-material/Square";
import { subCateogryApi } from "../../services/subCateogry-api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CategoryPart2({ subName, categoryId }) {
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    getSubCategories();
  }, []);

  const getSubCategories = async () => {
    let res = await subCateogryApi.getSubCategories(categoryId);
    // const filteredSubCategories = subCategories.filter(
    //   (item) => item.subCategoryName !== "Tin tức"
    // );
    setSubCategories(res);
    // console.log("sub categories: ", subCategories);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-item")}>{subName}</div>
        {subCategories.map((item, index) => (
          <Link
            to={`/subcategory/${item._id}`}
            style={{ textDecoration: "none" }}
          >
            <div className={cx("header-item2")}>{item.subCategoryName}</div>
          </Link>
        ))}
      </div>
      <p className={cx("tittle")}>
        Vụ trưởng Vụ Giáo dục Đại học: Đừng dồn tất cả nguyện vọng vào các
        trường top cao
      </p>
      <div className={cx("news")}>
        <img
          src="https://icdn.24h.com.vn/upload/3-2023/images/2023-07-21//medium/adt1689907972-k2-373.jpg"
          className={cx("image")}
        />
        <p className={cx("content")}>
          “Để phòng chống rủi ro, thí sinh nên đặt một số nguyện vọng và san đều
          ở những nhóm trường có mức độ cạnh tranh khác nhau, đừng dồn tất cả
          nguyện vọng vào các trường top cao”- PGS.TS Nguyễn Thu Thủy,...
        </p>
      </div>
      <div className={cx("news1")}>
        <div className={cx("item")}>
          <SquareIcon sx={{ fontSize: 8, color: "var(--primary-color)" }} />

          <a>Ngành 'hot' điểm chuẩn dự kiến không dưới 27 điểm</a>
        </div>
        <div className={cx("item")}>
          <SquareIcon sx={{ fontSize: 8, color: "var(--primary-color)" }} />

          <a>34 tuổi thi đại học 15 lần, người đàn ông đã chịu nhập học</a>
        </div>
        <div className={cx("item")}>
          <SquareIcon sx={{ fontSize: 8, color: "var(--primary-color)" }} />

          <a>Điểm chuẩn Trường ĐH Kinh tế Quốc dân dự kiến như thế nào?</a>
        </div>
        <div className={cx("item")}>
          <SquareIcon sx={{ fontSize: 8, color: "var(--primary-color)" }} />

          <a>
            Được hỗ trợ 100% học phí, học sinh Đà Nẵng tiết kiệm được bao nhiêu
            mỗi tháng?
          </a>
        </div>
      </div>
    </div>
  );
}

export default CategoryPart2;