import React, { useState } from "react";
import styled from "styled-components";
import { IoIosText } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";

// 댓글 섹션 컴포넌트 정의
const CommentSection = ({ initialComments }) => {
  // 댓글 목록과 입력 상태를 useState 훅을 사용하여 초기화
  const [comments, setComments] = useState(initialComments || []);
  const [newComment, setNewComment] = useState("");
  const [commentVisible, setCommentVisible] = useState(false);

  // 댓글 추가 처리 함수
  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  // 댓글 가시성 토글 함수
  const toggleCommentVisibility = () => {
    setCommentVisible((prevVisible) => !prevVisible);
  };

  return (
    // 댓글 섹션 컨테이너
    <div className="comment-section" style={{ margin: 4 }}>
      {/* 댓글 버튼 */}
      <IoIosText
        size={25}
        color="black"
        onClick={toggleCommentVisibility}
        style={{ cursor: "pointer" }}
      />
      {/* 댓글 개수 */}
      <span className="comment-count">
        댓글{""} {comments.length || 0}개
      </span>
      {/* 댓글이 보이는 경우 */}
      {commentVisible && (
        <div>
          <ul>
            {/* 댓글 목록 */}
            {comments.map((comment, index) => (
              <li key={index}>
                <div className="comment-bubble">
                  <IoIosText size={20} color="blue" />
                  {comment}
                </div>
              </li>
            ))}
          </ul>
          {/* 댓글 입력란 */}
          <div className="comment-input">
            <CommentInput
              type="text"
              placeholder="댓글을 입력하세요..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            {/* 댓글 전송 버튼 */}
            <SendButton onClick={handleCommentSubmit}>
              <FaPaperPlane
                style={{ marginBottom: -3 }}
                size={14}
                color="blue"
              />
            </SendButton>
          </div>
        </div>
      )}
    </div>
  );
};

// 댓글 입력란 스타일링된 input 컴포넌트
const CommentInput = styled.input`
  border-radius: 7px;
`;

// 댓글 전송 버튼 스타일링된 button 컴포넌트
const SendButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export default CommentSection;
