import { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import Upload from "../upload";
import FileList from "../upload/FileList";

export const Terms = () => {
  const [modalOpen, setModelOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [onData, setOnData] = useState([]);

  // 개인정보 미동의
  const today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  const disAgree = () => {
    alert(
      `${year}년 ${month}월 ${date}일 개인정보 처리 방침에 미동의하셨습니다.`
    );
  };

  // 모달 핸들러
  const openModal = () => {
    // setModelOpen(true);
    setModelOpen((prev: any) => !prev)
    setUploadModalOpen(false);
  };

  const closeModal = () => {
    // setModelOpen(false);
    setModelOpen((prev: any) => !prev)
    disAgree();
  };

  const openUploadModal = () => {
    // setUploadModalOpen(true);
    setUploadModalOpen((prev: any) => !prev)
    setModelOpen(false);
  };

  const closeUploadModal = () => {
    // setUploadModalOpen(false);
    setUploadModalOpen((prev: any) => !prev)
    disAgree();
  };

  useEffect(() => {
    // JSON API FETCH
    const fetchData = async () => {
      try {
        let response = await fetch(
          "${API_URL}"
        );
        if (response.status === 200) {
          let data = await response.json();
          setOnData(data);
        } else {
          throw "Error fetching users list";
        }
      } catch (error: any) {
        if (error instanceof Error) {
          return error;
        }
      }
    };
    fetchData();
  }, []);

  console.log("onData:", onData);

  return (
    <div className="container">
      <button className="cta-button" onClick={openModal}>
        <span className="cta-content">모달 클릭</span>
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        overlayClassName="modal-overlay"
        className="Modal"
      >
        <div className="modalWrapper">
          <div className="inner">
            <div className="ico" onClick={closeModal}>
              <IoMdClose />
            </div>
            <h2>
              {`${year}년 ${month}월 ${date}일`}부터 변경된
              <br />
              개인정보 처리 방침을 확인해주세요.
            </h2>
            <div className="desc">
              <p>안녕하세요. 다이얼로그입니다.</p>
              <p>
                다이얼로그를 이용해 주시는 고객 여러분께 감사드리며,
                <br />
                개인정보처리방침에 대한 개정사항을 아래와 같이 안내드립니다.
              </p>
              <p>1. 주요 개정 내역</p>
              <p>
                - 신사업 추가로 인해 데이터 이관 작업 진행
                <strong className="highlight">
                  - 모든 데이터는 암호화 된 상태로 진행됩니다.
                </strong>
              </p>
              <p>- API 증설에 따른 데이터 이관</p>
              <p>
                2. 적용 일자
                <br />- 2022년 9월 18일
              </p>
            </div>
          </div>
          <div className="buttonWrapper">
            <button onClick={closeModal}>취소하기</button>
            <button onClick={openUploadModal}>동의하기</button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={uploadModalOpen}
        onRequestClose={closeUploadModal}
        ariaHideApp={false}
        overlayClassName="modal-overlay"
        className="Modal"
      >
        <div className="modalWrapper">
          <div className="inner">
            <div className="ico" onClick={closeUploadModal}>
              <IoMdClose />
            </div>
            <div className="desc">
              <h2>
                변경된 개인정보처리방침에
                <br /> 동의하시면 서명 후 업로드해주세요.
              </h2>
              <p>
                개인정보처리방침에 동의하시면 서명 후 아래 파일업로드를 통해
                업로드 부탁드립니다.
                <br /> 서명 파일은 이미지 파일만 가능합니다.
              </p>
            </div>
            <Upload />
            <div className="buttonWrapper">
              <button onClick={openModal}>돌아가기</button>
              <button onClick={openUploadModal}>완료하기</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
