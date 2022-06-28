import { PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Input, Tag, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
const TagInput = styled(Input)`
  width: 95px;
  height: 28px;
  font-size: 16px;
  margin-right: 8px;
  vertical-align: top;
`;
const EditTag = styled(Tag)`
  width: auto;
  height: 28px;
  font-size: 16px;
`;
const SiteTagPlus = styled(Tag)`
  background: #ffffff;
  border-style: dashed;
  width: auto;
  height: 28px;
  font-size: 16px;
`;
interface ITagsProps {
  tags: Array<string>;
  setTags?: any;
}
export default function Tags(props: ITagsProps) {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef(null);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag) => {
    const newTags = props.tags.filter((tag) => tag !== removedTag);
    props.setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && props.tags?.indexOf(inputValue) === -1) {
      props.setTags([...props.tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...props.tags];
    newTags[editInputIndex] = editInputValue;
    props.setTags(newTags);
    setEditInputIndex(-1);
    setInputValue("");
  };
  return (
    <>
      {props.tags?.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <TagInput
              ref={editInputRef}
              key={tag}
              size="small"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }

        const isLongTag = tag.length > 20;
        const tagElem = (
          <EditTag
            key={tag}
            closable={typeof index === "number"}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (typeof index === "number") {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </EditTag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}

      {inputVisible && (
        <TagInput
          ref={inputRef}
          type="text"
          size="small"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}

      {!inputVisible && (
        <SiteTagPlus onClick={showInput}>
          <PlusOutlined /> 태그 추가
        </SiteTagPlus>
      )}
    </>
  );
}
