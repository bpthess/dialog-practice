import { useState } from "react";
import FileUpload from "./FileUpload";
import FileList from "./FileList";

const Upload = ({}) => {
  const [files, setFiles] = useState([]);

  // 업로드 파일 제거
  const removeFile = (filename: any) => {
    setFiles(files.filter((file) => file !== filename));
  };

  return (
    <div className="upload">
      <FileUpload files={files} setFiles={setFiles} />
      <FileList />
    </div>
  );
};

export default Upload;
