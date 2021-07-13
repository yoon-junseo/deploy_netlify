import userEvent from "@testing-library/user-event";
import React, { useRef } from "react";

const ScrollBox = () => {
  const style = {
    border: "1px solid black",
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: "relative",
  };
  const innerStyle = {
    width: "100%",
    height: "650px",
    background: "linear-gradient(white, black)",
  };
  const scrollRef = useRef();

  // this.scrollToBottom = () => {
  //   const { scrollHeight, clientHeight } = this.box;
  //   this.box.scrollTop = scrollHeight - clientHeight;
  // };
  const scrollToBottom = () => {
    console.log(scrollRef.current.scrollTop);
    scrollRef.current.scrollTop =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
  };
  return (
    <>
      <div style={style} ref={scrollRef}>
        <div style={innerStyle} />
      </div>
      <button onClick={() => scrollToBottom()}>down</button>
    </>
  );
};

export default ScrollBox;
