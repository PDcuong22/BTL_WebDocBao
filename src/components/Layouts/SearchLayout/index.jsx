import classNames from "classnames/bind";
import styles from "./SearchLayout.module.scss";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const cx = classNames.bind(styles);
function SearchLayout({ content }) {
  return (
    <div className={cx("wrapper")}>
      <Header />

      <div className={cx("content")}>
        <div className={cx("partLeft")}>{content}</div>
        <div className={cx("partRight")}></div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchLayout;