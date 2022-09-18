const FileUpload = ({ files, setFiles }: any) => {
  const uploadHandler = (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    setFiles([...files, file]);
  };

  const formData = new FormData();

  return (
    <>
      <div className="upload">
        <form>
          <div className="from-group files">
            <input
              type="file"
              className="form-control"
              multiple
              onChange={() => uploadHandler}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FileUpload;
