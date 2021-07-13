import React from "react";

const App = () => {
  const url =
    "data:image/png;base64,https://boated.s3.ap-northeast-2.amazonaws.com/2/2/logo.png/2";

  console.log(url);

  const downloadFile = () => {
    const url = "https://boated.s3.ap-northeast-2.amazonaws.com/2/2/logo.png/2";
    const link = document.createElement("a");

    link.href = url;

    link.download = "ss.png";
    link.click();
  };

  return (
    <>
      <p>
        <a
          href="data:image/png;charset=utf-8,https://image.flaticon.com/icons/png/512/1598/1598431.png"
          type="image/png"
          download="zzz.png"
        >
          img download
        </a>
      </p>
      <a
        href="https://boated.s3.ap-northeast-2.amazonaws.com/2/3/%EB%84%A4%ED%94%84%20%ED%8F%AC%EC%8A%A4%ED%84%B0.pptx/4"
        type="application/vnd.sealed.ppt"
        download="abc.pptx"
      >
        pptx download
      </a>
      <button onClick={() => downloadFile()}>다운로드</button>
      <a
        download="my.png"
        href="https://boated.s3.ap-northeast-2.amazonaws.com/2/2/logo.png/2"
        type="data/img"
        // href={url}
      >
        img다운로드
      </a>
      <a
        download="ex.pdf"
        href="https://rlm7gv2f7.toastcdn.net/pdf/attachment/8d9e2d1c0-c795-4ec1-8674-8255300012b6.pdf"
        type="application/pdf"
      >
        pdf 다운로드
      </a>
    </>
  );
  // return <ScrollBox />;
};

export default App;
