import ArticlePost from "../ArticlePost/ArticlePost";
import ArticlePostMain from "../ArticlePostMain/ArticlePost";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Search() {
  return (
    <><>
      <ArticlePostMain />
      <ArticlePost />
      <ArticlePost />
      <ArticlePost />
      <ArticlePost />
    </><div className={cx("wrapper")}>
        <p className={cx("tittle")}>
          Món ngon mỗi ngày
        </p>

        <p className={cx("content")}>
          Nếu đã chán gà luộc hay rán, học làm ngay những món này siêu ngon, bổ dưỡng
        </p>
        <p className={cx("news")}>
          <img src="https://icdn.24h.com.vn/upload/2-2023/images/2023-06-14//1686725546-898-thumbnail-width740height555_anh_cat_3_2.jpg"
            width="820"
            height="500" />
        </p>

        <p className={cx("tittle1")}>
          Công thức nấu ăn: Cách làm bún cá chấm thơm ngon hảo hạng như nhà hàng
        </p>
        <div className={cx("news1")}>
          <img src="https://icdn.24h.com.vn/upload/2-2023/images/2023-06-30/455x303/adt1688140808-edit-z44739281932264b6c751f24c4744eb_anh_cat_3_2.png"
            width="200"
            height="150" />
          <p className={cx("content1")}>
            Trong ẩm thực Việt Nam, nếu chọn ra món ăn có sự "biến hóa khôn lường" thì đó chính là món bún cá chấm. Những miếng cá giòn xốp ăn kèm bún, hòa quyện với vị nước mắm tỏi ớt sẽ khiến ai cũng ghiền.
          </p>
        </div>

        <p className={cx("tittle1")}>
          Mùa hè nóng bức, đừng bỏ qua các món ngon giải nhiệt, chữa bệnh từ mướp đắng
        </p>
        <div className={cx("news1")}>
          <img src="https://icdn.24h.com.vn/upload/2-2023/images/2023-05-17/455x303/adt1684297360-muop-dang-3-1683640374846764864646-0_anh_cat_3_2.jpg"
            width="200"
            height="150" />
          <p className={cx("content1")}>
            Mướp đắng là loại rau rất giàu dinh dưỡng tốt cho sức khỏe. Trong mùa hè, sử dụng những món ăn từ mướp đắng vừa có tác dụng giải nhiệt vừa hỗ trợ chữa nhiều bệnh.
          </p>
        </div>

        <p className={cx("tittle1")}>
          Món ngon cuối tuần: Cách làm cua đồng rang me chua ngọt đậm đà
        </p>
        <div className={cx("news1")}>
          <img src="https://icdn.24h.com.vn/upload/1-2023/images/2023-03-28/455x303/adt1679986078-cua-dong-rang-me_anh_cat_3_2.jpg"
            width="200"
            height="150" />
          <p className={cx("content1")}>
            Món cua đồng rang me đặc trưng bởi vị chua chua ngọt ngọt từ nước sốt me quyện với vị ngậy, giòn thơm của cua đồng. Món này dùng để ăn nhậu hay ăn với cơm đều ngon.
          </p>
        </div>

        <p className={cx("tittle1")}>
          Xúc xích phô mai chiên giòn kiểu này ai ăn cũng mê, trẻ con thì nghiện...
        </p>
        <div className={cx("news2")}>
          <img src="https://icdn.24h.com.vn/upload/1-2023/images/2023-01-30/455x303/adt1675043905-photo-1674915332696-1674915332777129_anh_cat_3_2.jpg"
            width="200"
            height="150" />
          <p className={cx("content1")}>
            Đây là một cách làm xúc xích chiên sáng tạo và rất thơm ngon, ai ăn cũng thích cho mà xem. Ngày nào bận, các mẹ có thể làm cho mang theo đến trường ăn sáng vì nó có đầy đủ carb và đạm.
          </p>
        </div>
      </div></>
  );
}                                      