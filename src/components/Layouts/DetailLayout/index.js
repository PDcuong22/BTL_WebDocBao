import classNames from "classnames/bind";
import styles from "./DetailLayout.module.scss";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const cx = classNames.bind(styles);
function DetailLayout({ content }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}>{content}</div>
      <Footer />
    </div>
  );
}

export default DetailLayout;
