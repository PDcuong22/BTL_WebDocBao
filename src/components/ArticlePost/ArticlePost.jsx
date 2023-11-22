import classNames from "classnames/bind";
import styles from "./ArticlePost.module.scss";

const cx = classNames.bind(styles);
function ArticlePost() {
  return <div className={cx("wrapper")}>Article</div>;
}

export default ArticlePost;
