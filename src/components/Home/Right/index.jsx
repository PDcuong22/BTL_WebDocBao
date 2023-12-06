import classNames from "classnames/bind";
import styles from "./Right.module.scss";
import { useEffect, useState } from "react";
import { articleApi } from "../../../services/article-api";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Right() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    let res = await articleApi.getArticleBySubCategory(
      "64c9322480b0ef3155bbcaef"
    );
    setArticle(res);
    console.log("thị trường: ", res);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("tittle")}>Tin tức thị trường</div>
      <div className={cx("table")}>
        {article.slice(0, 5).map((item, index) => (
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
      <div className={cx("tittle")}>Thông tin chứng khoán</div>
      <table>
        <tr>
          <a> VN-INDEX </a>
          <g> 1138.07 </g>
          <g> ▲ </g>
          <g> +11.85 </g>
          <g> (+1.05%) </g>
        </tr>
        <tr>
          <a> VN30-INDEX </a>
          <g> 1129.43 </g>
          <g> ▲ </g>
          <g> +9.99 </g>
          <g> (+0.89%) </g>
        </tr>
        <tr>
          <a> HNX-INDEX </a>
          <g> 225.82 </g>
          <g> ▲ </g>
          <g> +0.74 </g>
          <g> (+0.33) </g>
        </tr>
      </table>
    </div>
  );
}

export default Right;