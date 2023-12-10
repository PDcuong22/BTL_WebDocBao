import classNames from "classnames/bind";
import styles from "./Right.module.scss";
import { useEffect, useState } from "react";
import { articleApi } from "../../../services/article-api";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Right({ subCategoryId, articleId }) {
  const [article, setArticle] = useState([]);
  const [articleNot, setArticleNot] = useState([]);
  useEffect(() => {
    if (subCategoryId) {
      getArticle();
    }
  }, [subCategoryId]);

  useEffect(() => {
    if (subCategoryId) {
      getArticleNot();
    }
  }, [articleId]);

  const getArticle = async () => {
    let res = await articleApi.getArticleBySubCategory(subCategoryId);
    setArticle(res);
    console.log("thị trường: ", res);
  };
  const getArticleNot = async () => {
    let res = await articleApi.getArticleBySubCategoryNot(
      subCategoryId,
      articleId
    );
    setArticleNot(res);
    console.log("thị trường222: ", res);
  };
  return (
    <div className={cx("wrapper")}>
      <img
        style={{ marginTop: 12 }}
        src="https://static-images.vnncdn.net/files/publish/2022/10/22/world-cup-nu-2023-196.jpg"
        width="100%"
        height="550"
      ></img>
      <div className={cx("tittle")}>Tin tức khác</div>
      <div className={cx("table")}>
        {article.slice(0, 6).map((item, index) => (
          <div className={cx("table1")}>
            <th>
              <img src={item.image} className={cx("image")}></img>
            </th>
            <Link to={`/detail/${item._id}`} style={{ textDecoration: "none" }}>
              <td className={cx("header")}>{item.header}</td>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Right;
