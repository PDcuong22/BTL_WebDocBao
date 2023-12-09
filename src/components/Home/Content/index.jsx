import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import CategoryPart from "../../CategoryPart";
import CategoryPart2 from "../../CategoryPart2";
import { articleApi } from "../../../services/article-api";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Content() {
  // useEffect(() => {
  //   getArticles();
  // }, []);

  // const getArticles = async () => {
  //   let res = await articleApi.getArticles();
  //   console.log("List: ", res);
  // };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("top")}>
        <CategoryPart subCategoryId="64c27c4ffb9f67eee8ec54b9" />
        <CategoryPart subCategoryId="64bba3cef3d0c05481f80abd" />
        <CategoryPart subCategoryId="64bba1ecf3d0c05481f80a6c" />
        <CategoryPart subCategoryId="64bba231f3d0c05481f80a75" />
        <CategoryPart subCategoryId="64c396481d8357c80824505e" />
        <CategoryPart subCategoryId="64bba147f3d0c05481f80a55" />
        <CategoryPart subCategoryId="64c382d72833a8bce95440f7" />
        <CategoryPart subCategoryId="64bb9e3bf3d0c05481f80a11" />
      </div>
      <div className={cx("bottom")}>
        <CategoryPart2
          subName="Giáo dục"
          categoryId="64a79fedc573829b5238bd99"
        />
      </div>
    </div>
  );
}

export default Content;