import classNames from "classnames/bind";
import styles from "./CategoryPart.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { articleApi } from "../../services/article-api";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import SquareIcon from "@mui/icons-material/Square";
const cx = classNames.bind(styles);

function CategoryPart({ subCategoryId }) {
  const [articleLevel1, setArticleLevel1] = useState([]);
  const [articleLevel2, setArticleLevel2] = useState([]);
  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    let res = await articleApi.getArticleBySubCategory(subCategoryId);
    console.log("Hồ sơ phá án: ", res);
    setArticleLevel1(res?.filter((item) => item.level === 1));
    setArticleLevel2(res?.filter((item) => item.level === 2));
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-item")}>
          {articleLevel1[0]?.subCategoryId.categoryId.categoryName}
        </div>
        <div className={cx("header-item2")}>
          {articleLevel1[0]?.subCategoryId.subCategoryName}
        </div>
      </div>
      <Link
        to={`/detail/${articleLevel1[0]?._id}`}
        style={{ textDecoration: "none", padding: "2px 0" }}
      >
        <p className={cx("tittle")}>{articleLevel1[0]?.header}</p>
      </Link>
      <div className={cx("news")}>
        <div>
          <img
            style={{ width: "120px", height: "90px" }}
            src={articleLevel1[0]?.image}
          />
        </div>
        <p className={cx("content")}>{articleLevel1[0]?.content1}</p>
      </div>
      <div className={cx("news1")}>
        <div className={cx("item")}>
          <Brightness1Icon
            sx={{ fontSize: 8, color: "var(--primary-color)" }}
          />{" "}
          <Link
            to={`/detail/${articleLevel2[0]?._id}`}
            style={{ textDecoration: "none", marginLeft: 4 }}
          >
            {articleLevel2[0]?.header}
          </Link>
        </div>
        <div className={cx("item")}>
          <Brightness1Icon
            sx={{ fontSize: 8, color: "var(--primary-color)" }}
          />
          <Link
            to={`/detail/${articleLevel2[1]?._id}`}
            style={{ textDecoration: "none", marginLeft: 4 }}
          >
            {articleLevel2[1]?.header}
          </Link>
        </div>
        <div className={cx("item")}>
          <Brightness1Icon
            sx={{ fontSize: 8, color: "var(--primary-color)" }}
          />
          <Link
            to={`/detail/${articleLevel2[2]?._id}`}
            style={{ textDecoration: "none", marginLeft: 4 }}
          >
            {articleLevel2[2]?.header}
          </Link>
        </div>
      </div>

      <div className={cx("news2")}>
        <div className={cx("item2")}>
          <SquareIcon sx={{ fontSize: 8, color: "var(--primary-color)" }} />
          <Link
            to={`/detail/${articleLevel2[3]?._id}`}
            style={{ textDecoration: "none", marginLeft: 4 }}
          >
            {articleLevel2[3]?.header}
          </Link>
        </div>
        <div className={cx("item2")}>
          <SquareIcon sx={{ fontSize: 8, color: "var(--primary-color)" }} />

          <Link
            to={`/detail/${articleLevel2[4]?._id}`}
            style={{ textDecoration: "none", marginLeft: 4 }}
          >
            {articleLevel2[4]?.header}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryPart;
