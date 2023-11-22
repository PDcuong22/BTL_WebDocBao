import classNames from "classnames/bind";
import styles from "./CategoryPart2.module.scss";
import SquareIcon from "@mui/icons-material/Square";
import { subCateogryApi } from "../../services/subCateogry-api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { articleApi } from "../../services/article-api";

const cx = classNames.bind(styles);

function CategoryPart2({ categoryId, categoryName, subId }) {
  const [subCategories, setSubCategories] = useState([]);
  const [articleLevel1, setArticleLevel1] = useState([]);
  const [articleLevel2, setArticleLevel2] = useState([]);
  useEffect(() => {
    getSubCategories();
  }, []);

  useEffect(() => {
    getArticles();
  }, []);

  const getSubCategories = async () => {
    let res = await subCateogryApi.getSubCategories(categoryId);
    setSubCategories(res);
  };

  const getArticles = async () => {
    let res = await articleApi.getArticleBySubCategory(subId);
    setArticleLevel1(res?.filter((item) => item.level === 1));
    setArticleLevel2(res?.filter((item) => item.level === 2));
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-item")}>{categoryName}</div>
        {subCategories.map((item, index) => (
          <Link
            to={`/subcategory/${item._id}`}
            style={{ textDecoration: "none" }}
          >
            <div className={cx("header-item2")}>{item.subCategoryName}</div>
          </Link>
        ))}
      </div>
      {articleLevel1.slice(0, 1).map((item, i) => (
        <>
          <p className={cx("tittle")}>{item.header}</p>
          <div className={cx("news")}>
            <img src={item.image} className={cx("image")} />
            <p className={cx("content")}>
              “Để phòng chống rủi ro, thí sinh nên đặt một số nguyện vọng và san
              đều ở những nhóm trường có mức độ cạnh tranh khác nhau, đừng dồn
              tất cả nguyện vọng vào các trường top cao”- PGS.TS Nguyễn Thu
              Thủy,...
            </p>
          </div>
        </>
      ))}
      <div className={cx("news1")}>
        {articleLevel1.slice(2).map((item) => (
          <div className={cx("item")}>
            <SquareIcon sx={{ fontSize: 8, color: "var(--primary-color)" }} />
            <a>{item.header}</a>
          </div>
        ))}
      </div>
      <div className={cx("news1")}>
        {articleLevel2.slice(0, 3).map((item) => (
          <div className={cx("item")}>
            <SquareIcon sx={{ fontSize: 8, color: "var(--primary-color)" }} />
            <a>{item.header}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPart2;
