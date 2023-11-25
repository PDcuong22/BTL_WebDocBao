import classNames from "classnames/bind";
import styles from "./CategoryPart.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(styles);

function CategoryPart() {
  const [article, setArticle] = useState({
    id: 0,
    name: "Khoa học",
  });
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-item")}>Bóng đá</div>
        <div className={cx("header-item2")}>Thể thao</div>
      </div>
      <p className={cx("tittle")}>
        Ronaldo tuyên bố giải Ả Rập tốt hơn MLS của Messi, đá chính ngày Al
        Nassr thua 0-5
      </p>
      <Link to={`/detail/${article.name}`} style={{ textDecoration: "none" }}>
        <p className={cx("tittle")}>
          Ronaldo tuyên bố giải Ả Rập tốt hơn MLS của Messi, đá chính ngày Al
          Nassr thua 0-5
        </p>
      </Link>
      <div className={cx("news")}>
        <img
          style={{ width: 120, height: 90 }}
          src="https://icdn.24h.com.vn/upload/2-2023/images/2023-06-16//1686878748-ab6b2421-9b58-47c9-b238-c11cf2520ce7-16868349442331818264385-width1200height800.jpeg"
        />
        <p className={cx("content")}>
          Ronaldo có những chia sẻ đáng chú ý sau khi cùng Al Nassr thi đấu giao
          hữu với Celta Vigo.
        </p>
      </div>
      <div className={cx("news1")}>
        <div className={cx("item")}>
          <a>MU sẽ ra sao nếu không kịp mua tiền đạo: Ten Hag phải..</a>
        </div>
        <div className={cx("item")}>
          <a>MU sẽ ra sao nếu không kịp mua tiền đạo: Ten Hag phải..</a>
        </div>
        <div className={cx("item")}>
          <a>MU sẽ ra sao nếu không kịp mua tiền đạo: Ten Hag phải..</a>
        </div>
      </div>
      <div className={cx("news2")}>
        <div className={cx("item2")}>
          <a>MU sẽ ra sao nếu không kịp mua tiền đạo: Ten Hag phải..</a>
        </div>
        <div className={cx("item2")}>
          <a>MU sẽ ra sao nếu không kịp mua tiền đạo: Ten Hag phải..</a>
        </div>
      </div>
    </div>
  );
}
export default CategoryPart;