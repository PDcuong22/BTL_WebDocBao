import classNames from "classnames/bind";
import styles from "./MyEditor.module.scss";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const cx = classNames.bind(styles);

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
function ArticleDetail() {
  const [value, setValue] = useState("");
  const htmlString =
    '<span style="color: red;font-size: 40px;font-style: italic;display: flex;justify-content: center;width: 100%">Hello, world!</span>';
  const text =
    "<h1>This is a paragraph.</h1><h2>This is a heading.</h2><img src='https://icdn.24h.com.vn/upload/3-2023/images/2023-08-03/lukaku-transfer-sending-a-final-letter-to-juventus-as-chelsea-resumes-negotiations-1690943745-1691015741-712-width660height440.jpg' />";
  return (
    <div className={cx("container")}>
      <div className={cx("row")}>
        <div className={cx("editor")}>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className={cx("editor-input")}
            modules={modules}
            formats={formats}
          />
        </div>
        <div
          className={cx("preview")}
          dangerouslySetInnerHTML={{ __html: htmlString }}
        ></div>
      </div>
    </div>
  );
}

export default ArticleDetail;
