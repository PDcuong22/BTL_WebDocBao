import Footer from "../../common/Footer";
import Header from "../../common/Header";

import classNames from "classnames/bind";
import styles from "./HomeLayout.module.scss";
import Right from "../../Home/Right";

const cx = classNames.bind(styles);
function HomeLayout({ content }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}>
        <div className={cx("partLeft")}>{content}</div>
        <div className={cx("partRight")}>
          <Right subCategoryId="64c9322480b0ef3155bbcaef" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
