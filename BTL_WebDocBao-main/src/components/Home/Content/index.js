import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import CategoryPart from "../../CategoryPart";
const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("wrapper")}>
      <CategoryPart />
      <CategoryPart />
      <CategoryPart />
      <CategoryPart />
      <CategoryPart />
    </div>
  );
}

export default Content;