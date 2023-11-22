import classNames from "classnames/bind";
import styles from "./ArticlePostMain.module.scss";

const cx = classNames.bind(styles);
function ArticlePostMain() {
  return <div className={cx("wrapper")}>Article</div>;
}

export default ArticlePostMain;
