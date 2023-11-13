import classNames from "classnames/bind";
import styles from "./CategoryPart.module.scss";

const cx = classNames.bind(styles);

function CategoryPart() {
  return <div className={cx("wrapper")}>Đây là CategoryPart !</div>;
}

export default CategoryPart;