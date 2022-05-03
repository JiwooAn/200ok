import React, { useState, useContext } from "react";
import "moment/locale/ko";
import * as Api from "../../api";
import styled from "../../css/match.module.css";
import "../../css/GuestPost.css";

const AddGuestbookModal = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    setIsTyping(true);
    setContent(e.target.value);
  };

  // 백엔드로 post 해주는 부분
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Api.post("guestbooks", {
        content: content,
      });
      setContent((current) => {
        const newContent = [...current];
        newContent.push(response.data.payload);
        return newContent;
      });
      setIsTyping(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className={styled.commentForm} onSubmit={handleSubmit}>
        <div className={styled.commentBack}>
          <input
            type="text"
            placeholder="내용을 입력해주세요"
            value={isTyping ? content : ""}
            onChange={handleContentChange}
            required
          />
        </div>
        <button type="submit" className="submitBtn">
          오케이!
        </button>
      </form>
    </div>
  );
}

export default AddGuestbookModal;