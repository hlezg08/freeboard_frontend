import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useEffect, useRef } from "react";

interface IToastEditorProps {
  setValue: any;
  trigger: any;
  value?: string;
}

function ToastEditor(props: IToastEditorProps) {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    editorRef.current.getInstance().setHTML(props.value);
  }, []);

  const onChangeEditor = () => {
    if (!editorRef.current) return;
    const instance = editorRef.current.getInstance();
    const value = instance.getHTML();
    props.setValue(
      "contents",
      value === '<p><br class="ProseMirror-trailingBreak"></p>' ? "" : value
    );
    props.trigger("contents");
  };

  return (
    <Editor
      ref={editorRef}
      onChange={onChangeEditor}
      height={"400px"}
      initialEditType="wysiwyg"
    ></Editor>
  );
}

export default ToastEditor;
