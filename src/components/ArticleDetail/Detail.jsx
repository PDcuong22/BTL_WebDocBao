import classNames from "classnames/bind";
import styles from "./ArticleDetail.module.scss";

const cx = classNames.bind(styles);
function ArticleDetail() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>h1h1</div>
      <div className={cx("right")}>h1h1</div>
    </div>
  );
}

export default ArticleDetail;