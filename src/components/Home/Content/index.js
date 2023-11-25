import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import CategoryPart from "../../CategoryPart";
import CategoryPart2 from "../../CategoryPart2";
import { articleApi } from "../../../services/article-api";
import { useEffect } from "react";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Content() {
  useEffect(() => {
    getArticles();
  }, []);
  const getArticles = async () => {
    let res = await articleApi.getArticles();
    console.log("List: ", res);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top")}>
        <CategoryPart />
        <CategoryPart />
        <CategoryPart />
        <CategoryPart />
        <CategoryPart />
        <CategoryPart />
      </div>
      <div className={cx("bottom")}>
        <CategoryPart2 />
        <CategoryPart2 />
        <CategoryPart2 />
        <CategoryPart2 />
        <CategoryPart2 />
        <CategoryPart2 />
      </div>
    </div>
  );
}
export default Content;