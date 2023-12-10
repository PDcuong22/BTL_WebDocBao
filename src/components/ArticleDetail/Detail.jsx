import classNames from "classnames/bind";
import styles from "./ArticleDetail.module.scss";
import { useEffect, useState } from "react";
import { articleApi } from "../../services/article-api";
import { useParams } from "react-router";
import Moment from "moment";
import "moment/locale/vi";
import Right from "../Home/Right";

const cx = classNames.bind(styles);

function ArticleDetail() {
  const [article, setArticle] = useState({});
  const params = useParams();

  useEffect(() => {
    Moment.locale("vi");
  }, []);
  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    let res = await articleApi.getArticleById(params.id);
    setArticle(res);
    console.log("article: ", res[0].subCategoryId._id);
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
        {article[0]?.content1?.split("\n").map((line, index) => (
          <div className={cx("content2")} key={index}>
            {line}
          </div>
        ))}

        {article[0]?.content ? (
          <></>
        ) : (
          <div className={cx("news")}>
            <img src={article[0]?.image} />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: article[0]?.content }}></div>

        <div className={cx("content3")}>{article[0]?.imageTittle}</div>

        {article[0]?.content2?.split("\n").map((line, index) => (
          <div className={cx("content2")} key={index}>
            {line}
          </div>
        ))}
        <div className={cx("content4")}>{article[0]?.authorId.authorName}</div>
      </div>
      <div className={cx("right")}>
        <Right
          subCategoryId={article[0]?.subCategoryId._id}
          articleId={article[0]?._id}
        />
      </div>
    </div>
  );
}

export default ArticleDetail;
