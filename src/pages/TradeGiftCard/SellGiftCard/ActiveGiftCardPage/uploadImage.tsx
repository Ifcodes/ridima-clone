import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import FileUploadInput from "../../../../components/atoms/Forms/FileUploadInput";
import Input from "../../../../components/atoms/Forms/Input";
import HorizontalLinedTitle from "../../../../components/atoms/TitleWithHorizontalLine";
import FileUploadIcon from "../../../../components/atoms/vectors/UploadIcon";
import { UploadImageWrapper } from "../../styledTradeGiftCard";

type ImgUploadProps = {
  formFields: {
    ecode?: string;
    selectedImages?: Array<string>;
    imgSelected?: boolean;
  };
  handleFormChange?: ChangeEventHandler<HTMLInputElement>;
  handleEcodeInput?: ChangeEventHandler<HTMLInputElement>;
  removeImg?: Function;
};

const UploadImage = ({
  formFields = {
    ecode: "",
    selectedImages: [""],
    imgSelected: false,
  },
  handleEcodeInput,
  handleFormChange,
  removeImg = () => {},
}: ImgUploadProps) => {
  return (
    <UploadImageWrapper>
      <div className="title-cont">
        <HorizontalLinedTitle text="Enter Ecode" />
      </div>
      <div className="ecode-cont">
        <Input
          label="Ecode"
          placeholder="e.g XDG2345678901234"
          value={formFields.ecode}
          onChange={handleEcodeInput}
        />
      </div>
      <div className="title-cont">
        <HorizontalLinedTitle text="Upload Image" />
      </div>
      <div className="selected-imgs">
        <div>
          <FileUploadInput
            onChange={handleFormChange}
            label="Upload Card(s) Images"
          />
        </div>
        {formFields.imgSelected && (
          <>
            {formFields.selectedImages &&
              formFields.selectedImages.map((img, index) => (
                <div key={`${img}-${index}`} className="img-cont">
                  <div className="remove-img" onClick={() => removeImg(index)}>
                    -
                  </div>
                  <img src={`${img}`} alt="" />
                </div>
              ))}
          </>
        )}
      </div>
    </UploadImageWrapper>
  );
};

export default UploadImage;
