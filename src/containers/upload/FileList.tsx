import { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import FileItem from "./FileItem";

const FileList = (props: any) => {
  const [onData, setOnData] = useState([]);

  return (
    <>
      <div className="file-list">
        <AiOutlinePaperClip />
        <p>{props.data}</p>
        <IoMdClose />
      </div>
    </>
  );
};

export default FileList;
