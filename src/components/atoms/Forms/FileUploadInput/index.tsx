import React from "react";
import { generateId } from "../../../../utils/generateId";
import FileUploadIcon from "../../vectors/UploadIcon";
import { InputProps } from "../Input";
import { FileUploadWrapper } from "./styledFileUpload";

const FileUploadInput = ({
  id = generateId(),
  label,
  onChange,
  onClick,
  ...props
}: InputProps) => {
  return (
    <FileUploadWrapper>
      <label htmlFor="upload" className="lable-cont">
        <input id="upload" type="file" name="file" onChange={onChange} />
        <FileUploadIcon />
        <span>{label}</span>
      </label>
    </FileUploadWrapper>
  );
};

export default FileUploadInput;
