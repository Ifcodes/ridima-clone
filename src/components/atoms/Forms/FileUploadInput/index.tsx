import React from "react";
import { generateId } from "../../../../utils/generateId";
import PlusIcon from "../../vectors/PlusIcon";
import FileUploadIcon from "../../vectors/UploadIcon";
import { InputProps } from "../Input";
import { FileUploadWrapper } from "./styledFileUpload";

interface FileUploadProps extends InputProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}
const FileUploadInput = ({
  id = generateId(),
  label,
  width,
  height,
  borderRadius,
  onChange,
  onClick,
  ...props
}: FileUploadProps) => {
  return (
    <FileUploadWrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      <label htmlFor="upload" className="lable-cont">
        <input id="upload" type="file" name="file" onChange={onChange} />
        {label ? <FileUploadIcon /> : <PlusIcon />}
        {label && <span>{label}</span>}
      </label>
    </FileUploadWrapper>
  );
};

export default FileUploadInput;
