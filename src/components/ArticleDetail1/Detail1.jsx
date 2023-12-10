import classNames from "classnames/bind";
import styles from "./ArticleDetail1.module.scss";
import { useEffect, useState } from "react";
import { articleApi } from "../../services/article-api";
import { useParams } from "react-router";
import Moment from "moment";

const cx = classNames.bind(styles);

function ArticleDetail1() {
  const [article, setArticle] = useState({});
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    let res = await articleApi.getArticleById(params.id);
    setArticle(res);
    console.log("article: ", res);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <div className={cx("header-item")}>
          <div className={cx("header-item12")}>
            <div className={cx("header-item1")}>
              {article[0]?.subCategoryId.categoryId.categoryName}
            </div>
            <div className={cx("header-item2")}>
              {article[0]?.subCategoryId.subCategoryName}
            </div>
          </div>
          <div className={cx("header-item3")}>
            {Moment(article[0]?.createdAt).format("dddd, DD/MM/YYYY HH:mm")}
          </div>
        </div>

        <div className={cx("tittle")}>{article[0]?.articleName}</div>
        <div dangerouslySetInnerHTML={{ __html: article[0]?.content }}></div>

        <div className={cx("content4")}>{article[0]?.authorId.authorName}</div>
      </div>
      <div className={cx("right")}>h1h1</div>
    </div>
  );
}

export default ArticleDetail1;
