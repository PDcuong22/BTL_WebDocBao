import { memo } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const Editor = memo((props) => {
  const handleChangeInput = (e) => {
    props.setContent(e);
  };

  return (
    <SunEditor
      placeholder="Write something..."
      autoFocus={true}
      onChange={handleChangeInput}
      width="100%"
      height="500"
      defaultValue={props.content}
      setOptions={{
        height: 500,
        buttonList: [
          ["undo", "redo"],
          ["font", "fontSize", "formatBlock"],
          ["bold", "underline", "italic", "strike", "subscript", "superscript"],
          ["removeFormat"],
          ["fontColor", "hiliteColor"],
          ["indent", "outdent"],
          ["align", "horizontalRule", "list", "table"],
          ["link", "image", "video"],
          ["fullScreen", "showBlocks", "codeView"],
        ],
      }}
    />
  );
});

export default Editor;
